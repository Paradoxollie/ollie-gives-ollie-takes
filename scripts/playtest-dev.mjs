import { spawn } from "node:child_process";

const port = process.env.PORT ?? "3000";
const env = Object.fromEntries(Object.entries(process.env).filter((entry) => typeof entry[1] === "string"));
const npmExecPath = process.env.npm_execpath;
const command = npmExecPath ? process.execPath : process.platform === "win32" ? "npm.cmd" : "npm";
const args = npmExecPath ? [npmExecPath, "run", "dev", "--", "-p", port] : ["run", "dev", "--", "-p", port];

const child = spawn(command, args, {
  env: {
    ...env,
    NEXT_PUBLIC_PLAYTEST_BUILD: "1",
    PLAYTEST_BUILD: "1",
  },
  shell: false,
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
