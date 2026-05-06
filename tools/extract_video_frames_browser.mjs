import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright";

function parseArgs(argv) {
  const args = {
    input: null,
    outputDir: null,
    frameCount: 24,
    start: 0,
    end: null,
    overwrite: false,
    pattern: "frame_%04d.png",
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === "--input" && next) {
      args.input = next;
      i += 1;
    } else if (arg === "--output-dir" && next) {
      args.outputDir = next;
      i += 1;
    } else if (arg === "--frame-count" && next) {
      args.frameCount = Number.parseInt(next, 10);
      i += 1;
    } else if (arg === "--start" && next) {
      args.start = Number.parseFloat(next);
      i += 1;
    } else if (arg === "--end" && next) {
      args.end = Number.parseFloat(next);
      i += 1;
    } else if (arg === "--pattern" && next) {
      args.pattern = next;
      i += 1;
    } else if (arg === "--overwrite") {
      args.overwrite = true;
    }
  }

  if (!args.input || !args.outputDir) {
    throw new Error("--input and --output-dir are required");
  }
  if (!Number.isFinite(args.frameCount) || args.frameCount < 1) {
    throw new Error("--frame-count must be a positive integer");
  }

  return args;
}

function ensureCleanOutputDir(outputDir, overwrite) {
  fs.mkdirSync(outputDir, { recursive: true });
  const existing = fs.readdirSync(outputDir).filter((name) => /^frame_\d+\.png$/i.test(name));
  if (existing.length && !overwrite) {
    throw new Error(`${outputDir} already contains extracted frames; pass --overwrite`);
  }
  for (const name of existing) {
    fs.unlinkSync(path.join(outputDir, name));
  }
}

function formatPattern(pattern, index) {
  return pattern.replace(/%0?(\d*)d/, (_match, width) => String(index).padStart(Number.parseInt(width || "0", 10), "0"));
}

function createRangeServer(videoPath) {
  const stat = fs.statSync(videoPath);
  return http.createServer((req, res) => {
    if (req.url !== "/video.mp4") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!doctype html><html><body><video id="v" src="/video.mp4" muted playsinline preload="auto"></video><canvas id="c"></canvas></body></html>`);
      return;
    }

    const range = req.headers.range;
    if (!range) {
      res.writeHead(200, {
        "Accept-Ranges": "bytes",
        "Content-Length": stat.size,
        "Content-Type": "video/mp4",
      });
      fs.createReadStream(videoPath).pipe(res);
      return;
    }

    const [startRaw, endRaw] = range.replace(/bytes=/, "").split("-");
    const start = Number.parseInt(startRaw, 10);
    const end = endRaw ? Number.parseInt(endRaw, 10) : stat.size - 1;
    const safeStart = Math.max(0, Math.min(start, stat.size - 1));
    const safeEnd = Math.max(safeStart, Math.min(end, stat.size - 1));
    res.writeHead(206, {
      "Accept-Ranges": "bytes",
      "Content-Length": safeEnd - safeStart + 1,
      "Content-Range": `bytes ${safeStart}-${safeEnd}/${stat.size}`,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(videoPath, { start: safeStart, end: safeEnd }).pipe(res);
  });
}

async function extractByPlayback(page, times) {
  return page.evaluate(async ({ times }) => {
    const video = document.getElementById("v");
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const captured = [];
    let targetIndex = 0;

    if (times[0] > 0) {
      await new Promise((resolve) => {
        video.addEventListener("seeked", resolve, { once: true });
        video.currentTime = Math.min(Math.max(0, times[0]), Math.max(0, video.duration - 0.001));
      });
    }

    video.pause();
    video.muted = true;
    video.playbackRate = 1;

    await video.play();

    while (targetIndex < times.length) {
      await new Promise((resolve) => video.requestVideoFrameCallback(() => resolve()));
      while (targetIndex < times.length && video.currentTime >= times[targetIndex] - 0.001) {
        ctx.drawImage(video, 0, 0);
        captured.push({
          requestedTime: times[targetIndex],
          actualTime: video.currentTime,
          dataUrl: canvas.toDataURL("image/png"),
        });
        targetIndex += 1;
      }

      if (video.ended || video.currentTime >= times[times.length - 1] + 0.25) {
        break;
      }
    }

    video.pause();

    while (captured.length < times.length) {
      ctx.drawImage(video, 0, 0);
      captured.push({
        requestedTime: times[captured.length],
        actualTime: video.currentTime,
        dataUrl: canvas.toDataURL("image/png"),
      });
    }

    return captured;
  }, { times });
}

async function main() {
  const args = parseArgs(process.argv);
  const input = path.resolve(args.input);
  const outputDir = path.resolve(args.outputDir);
  ensureCleanOutputDir(outputDir, args.overwrite);

  const server = createRangeServer(input);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "domcontentloaded" });
  const metadata = await page.evaluate(async () => {
    const video = document.getElementById("v");
    const canvas = document.getElementById("c");
    await new Promise((resolve, reject) => {
      video.addEventListener("loadedmetadata", resolve, { once: true });
      video.addEventListener("error", () => reject(new Error(video.error?.message || "video error")), { once: true });
      video.load();
    });
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    return {
      duration: video.duration,
      width: video.videoWidth,
      height: video.videoHeight,
    };
  });

  const start = Math.max(0, args.start);
  const end = args.end === null ? metadata.duration : Math.min(args.end, metadata.duration);
  if (end <= start) {
    throw new Error(`Invalid extraction window: ${start}..${end}`);
  }

  const times = Array.from({ length: args.frameCount }, (_value, index) => {
    if (args.frameCount === 1) return start;
    return start + ((end - start) * index) / args.frameCount;
  });

  const capturedFrames = await extractByPlayback(page, times);
  const extracted = [];
  for (let i = 0; i < capturedFrames.length; i += 1) {
    const frame = capturedFrames[i];
    const outputName = formatPattern(args.pattern, i + 1);
    const outputPath = path.join(outputDir, outputName);
    fs.writeFileSync(outputPath, Buffer.from(frame.dataUrl.split(",")[1], "base64"));
    extracted.push({ index: i + 1, requestedTime: times[i], actualTime: frame.currentTime, path: outputPath });
  }

  await browser.close();
  server.close();

  fs.writeFileSync(
    path.join(outputDir, "extraction_report.json"),
    JSON.stringify(
      {
        input,
        outputDir,
        pattern: args.pattern,
        mode: "browser-video-frame-sampling",
        frameCount: extracted.length,
        requestedFrameCount: args.frameCount,
        start,
        end,
        metadata,
        extracted,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
