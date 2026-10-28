import { ImageResponse } from "next/og"

const size = {
  width: 1200,
  height: 630,
}

function truncate(value: string | null, max: number) {
  if (!value) return ""
  return value.length > max ? `${value.slice(0, max - 1)}…` : value
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = truncate(searchParams.get("title"), 70) || "Digital Systems Engineer"
  const subtitle =
    truncate(searchParams.get("subtitle"), 150) ||
    "Embedded systems · Low-level software · PCB design"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #05070d 0%, #0b1220 55%, #16233d 100%)",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 600 }}>Maël Boutsoque</span>
            <span style={{ fontSize: 20, color: "#94a3b8" }}>boutsoque.vercel.app</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <span
            style={{
              fontSize: title.length > 40 ? 58 : 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 28, color: "#cbd5e1", lineHeight: 1.35 }}>{subtitle}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#94a3b8" }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#38bdf8",
              display: "flex",
            }}
          />
          ENSEM · Quandela · Hardware &amp; embedded systems
        </div>
      </div>
    ),
    size
  )
}
