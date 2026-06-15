import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const font = await readFile(path.join(process.cwd(), 'public/fonts/barlow-condensed-900.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#1D252C',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Diagonal yellow accent stripe */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: 278,
            width: 7,
            height: 900,
            background: '#FCDA01',
            transform: 'rotate(12deg)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: 256,
            width: 2,
            height: 900,
            background: 'rgba(252,218,1,0.2)',
            transform: 'rotate(12deg)',
            display: 'flex',
          }}
        />

        {/* Right yellow stat panel */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 230,
            height: '100%',
            background: '#FCDA01',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontFamily: 'BarlowCondensed', fontWeight: 900, fontSize: 88, color: '#1D252C', lineHeight: 0.82, letterSpacing: -2 }}>
            20
          </span>
          <span style={{ fontFamily: 'BarlowCondensed', fontWeight: 900, fontSize: 38, color: '#1D252C', letterSpacing: 2, marginTop: 4 }}>
            LET
          </span>
          <span style={{ fontSize: 13, color: 'rgba(29,37,44,0.5)', letterSpacing: 3, marginTop: 6 }}>
            PRAXE
          </span>
          <div style={{ width: 36, height: 1, background: 'rgba(29,37,44,0.15)', margin: '18px 0', display: 'flex' }} />
          <span style={{ fontFamily: 'BarlowCondensed', fontSize: 14, color: '#1D252C', letterSpacing: 0.5, textAlign: 'center' }}>
            +420 777 599 092
          </span>
          <span style={{ fontSize: 11, color: 'rgba(29,37,44,0.5)', letterSpacing: 2, marginTop: 3 }}>
            NON-STOP
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '52px 56px',
            width: 970,
            height: '100%',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 40, height: 40, background: '#FCDA01', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'BarlowCondensed', fontWeight: 900, fontSize: 24, color: '#1D252C' }}>V</span>
            </div>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', letterSpacing: 3 }}>
              BAGR-VYKOPY.CZ
            </span>
          </div>

          {/* Headline — mirrors hero exactly */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {(['ZEMNÍ', 'PRÁCE', 'VODIČKA'] as const).map((word, i) => (
              <span
                key={word}
                style={{
                  fontFamily: 'BarlowCondensed',
                  fontWeight: 900,
                  fontSize: 152,
                  lineHeight: 0.86,
                  letterSpacing: -4,
                  color: i === 2 ? '#FCDA01' : '#ffffff',
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Service tags */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['VÝKOPY', 'PŘÍPOJKY', 'DEMOLICE', 'TERÉNNÍ ÚPRAVY'].map((s) => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  padding: '8px 18px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 4,
                }}
              >
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', letterSpacing: 2 }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'BarlowCondensed', data: font.buffer.slice(font.byteOffset, font.byteOffset + font.byteLength) as ArrayBuffer, weight: 900, style: 'normal' },
      ],
    }
  )
}
