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
          background: "#87CEEB",
        }}
      >
        {/* Bottom-left orange blob */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5A962 0%, #E8956A 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Top-right orange blob */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5A962 0%, #E8956A 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Bottom-right subtle orange */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            right: "200px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5A962 0%, transparent 60%)",
            filter: "blur(60px)",
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <span
          style={{
            fontSize: "96px",
            fontWeight: 500,
            color: "white",
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-2px",
            zIndex: 10,
          }}
        >
          ArthurGPT
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
