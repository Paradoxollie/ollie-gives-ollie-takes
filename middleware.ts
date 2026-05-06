import { NextResponse, type NextRequest } from "next/server";

function isPlaytestBuild(): boolean {
  return process.env.NEXT_PUBLIC_PLAYTEST_BUILD === "1" || process.env.PLAYTEST_BUILD === "1";
}

export function middleware(request: NextRequest) {
  if (!isPlaytestBuild()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return new NextResponse(null, { status: 404 });
  }

  if (pathname === "/lab" || pathname.startsWith("/lab/") || pathname === "/game" || pathname.startsWith("/game/")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/game/:path*", "/lab/:path*"],
};
