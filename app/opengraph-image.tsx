import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Die GEO Agentur – Werden Sie in ChatGPT & Co. gefunden.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OgImage() {
  const [regular, medium] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "app/fonts/Geist-Medium.ttf")),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f4f2ed", padding: 72, fontFamily: "Geist" }}>
        <div style={{ display: "flex", alignItems: "flex-start", fontSize: 34, color: "#10110f", letterSpacing: -1 }}>
          <span>Die&nbsp;</span>
          <span style={{ fontWeight: 500 }}>GEO</span>
          <span>&nbsp;Agentur</span>
          <span style={{ marginLeft: 8, marginTop: -4, background: "#e0451f", color: "#fff", fontSize: 18, padding: "2px 7px", borderRadius: 4 }}>1</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 500, color: "#10110f", letterSpacing: -5, lineHeight: 1 }}>Werden Sie in</div>
          <div style={{ fontSize: 104, fontWeight: 500, color: "#10110f", letterSpacing: -5, lineHeight: 1.05 }}>ChatGPT & Co. gefunden.</div>
          <div style={{ marginTop: 36, fontSize: 28, color: "#66665f" }}>Generative Engine Optimization für ChatGPT, Gemini, Perplexity & AI Overviews</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
