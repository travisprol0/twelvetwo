import { ImageResponse } from "next/og";

export const alt = "TwelveTwo Technology — Software engineering for businesses that need to build.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0e0e0c",
          color: "#f3efe6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.18em", color: "#c6a56a" }}>
          TWELVETWO TECHNOLOGY
        </div>
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.04em", maxWidth: 920 }}>
          Software engineering for businesses that need to build.
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#b7b1a6" }}>
          Custom software · Backend systems · APIs · Integrations
        </div>
      </div>
    ),
    { ...size },
  );
}
