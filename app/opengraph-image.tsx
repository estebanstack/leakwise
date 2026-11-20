import { ImageResponse } from "next/og";

export const alt = "Leakwise — Stop paying for things you forgot about.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1020",
          color: "#EEF1F7",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1 }}>leakwise</div>
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path
              d="M12 2.5c-.4 0-.8.2-1 .5C8.6 6.2 5.5 10 5.5 14a6.5 6.5 0 0 0 13 0c0-4-3.1-7.8-5.5-11-.2-.3-.6-.5-1-.5Z"
              fill="#FFB547"
            />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Stop paying for things you forgot about.
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "12px 26px",
              borderRadius: 999,
              background: "rgba(61,214,181,0.15)",
              color: "#3DD6B5",
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            $512/year found
          </div>
        </div>
      </div>
    ),
    size,
  );
}
