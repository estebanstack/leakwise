import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1020",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24">
          <path
            d="M12 2.5c-.4 0-.8.2-1 .5C8.6 6.2 5.5 10 5.5 14a6.5 6.5 0 0 0 13 0c0-4-3.1-7.8-5.5-11-.2-.3-.6-.5-1-.5Z"
            fill="#FFB547"
          />
        </svg>
      </div>
    ),
    size,
  );
}
