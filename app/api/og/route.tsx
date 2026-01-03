import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient Background - matching ChatGPT style */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #f97316 0%, #87ceeb 30%, #87ceeb 70%, #f97316 100%)",
          }}
        />

        {/* Soft overlay for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(135, 206, 235, 0.8) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            zIndex: 10,
          }}
        >
          {/* Logo Circle with "A" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.25)",
              border: "4px solid rgba(255, 255, 255, 0.9)",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "white",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              A
            </span>
          </div>

          {/* ArthurGPT Text */}
          <span
            style={{
              fontSize: "96px",
              fontWeight: 600,
              color: "white",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "-2px",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            ArthurGPT
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
