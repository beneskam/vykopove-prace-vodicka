import type { CSSProperties, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Container({ children, className, style }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: 1440,
        margin: '0 auto',
        paddingLeft: 'clamp(24px, 6.25vw, 100px)',
        paddingRight: 'clamp(24px, 6.25vw, 100px)',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
