import { NextResponse } from "next/server";
import path from "path";
import { readdir } from "fs/promises";

export const runtime = "nodejs";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "cues");

  let files: string[] = [];
  try {
    files = await readdir(dir);
  } catch {
    return NextResponse.json({ photos: [] });
  }

  const photos = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .sort()
    .reverse()
    .map((f) => `/cues/${f}`);

  return NextResponse.json({ photos });
}
