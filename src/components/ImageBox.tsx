import Image from 'next/image'

interface ImageBoxProps {
  src: string
  alt: string
  /** Hint for Next.js image optimisation — does not fix the rendered size */
  width?: number
  height?: number
  background?: string
  border?: string
  borderRadius?: number
  boxShadow?: string
  /** Padding inside the border (useful for SVG illustrations) */
  padding?: string
  style?: React.CSSProperties
  imageStyle?: React.CSSProperties
  /** Optional overlay / badge children rendered on top of the image */
  children?: React.ReactNode
  /** sizes hint for Next.js responsive image optimisation */
  sizes?: string
  /** Mark as LCP/hero image to disable lazy loading */
  priority?: boolean
}

/**
 * A borderered image container whose border always matches the image size.
 * No fixed height — the container grows to fit the image naturally.
 */
export default function ImageBox({
  src,
  alt,
  width = 800,
  height = 600,
  background,
  border = '1px solid rgba(255,255,255,0.08)',
  borderRadius = 20,
  boxShadow,
  padding,
  style,
  imageStyle,
  children,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: ImageBoxProps) {
  return (
    <div
      style={{
        borderRadius,
        background,
        border,
        position: 'relative',
        overflow: 'hidden',
        boxShadow,
        padding,
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        style={{ width: '100%', height: 'auto', display: 'block', ...imageStyle }}
      />
      {children}
    </div>
  )
}
