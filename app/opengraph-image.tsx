import { ImageResponse } from 'next/og'

export const alt = 'Iheb Jdey — Software Engineer portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          padding: '72px 80px',
          background: '#0f172a',
          color: '#f8fafc',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#93c5fd',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 5,
          }}
        >
          IHEB JDEY / PORTFOLIO
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 960 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              color: '#cbd5e1',
              fontSize: 34,
              lineHeight: 1.3,
            }}
          >
            Full-Stack · Mobile · Applied AI
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#94a3b8',
            fontSize: 23,
          }}
        >
          <div style={{ display: 'flex' }}>React · Next.js · Node.js · Flutter · Python</div>
          <div style={{ display: 'flex', color: '#60a5fa', fontWeight: 700 }}>
            ihebjdey.tn
          </div>
        </div>
      </div>
    ),
    size,
  )
}
