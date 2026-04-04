'use client'

const items = [
  'Zemní práce',
  'Výkopové práce',
  'Kanalizační přípojky',
  'Vodovodní přípojky',
  'Terénní úpravy',
  'Zámkové dlažby',
  'Demolice',
  'Praha & Střední Čechy',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        background: 'var(--yellow)',
        height: 52,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="animate-ticker flex items-center whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 24,
              paddingLeft: 32,
              paddingRight: 8,
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 800,
              fontSize: 15,
              color: 'var(--dark)',
              letterSpacing: '2.1px',
              textTransform: 'uppercase',
            }}
          >
            {item}
            <span
              style={{
                opacity: 0.3,
                fontSize: 10,
                fontFamily: "var(--font-barlow-condensed), sans-serif",
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
