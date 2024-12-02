import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  console.log("middleware");
  return req;
}

export const config = {
  matcher: ["*"],
};
