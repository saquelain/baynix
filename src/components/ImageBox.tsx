import Image, { ImageProps } from 'next/image'

type DivProps = {
  background?: string
  border?: string
  borderRadius?: number
  boxShadow?: string
  padding?: string
  /** Style applied to the wrapper div (not the image) */
  wrapperStyle?: React.CSSProperties
  /** Style applied directly to the <img> element, merged with layout defaults */
  imageStyle?: React.CSSProperties
  children?: React.ReactNode
}

/**
 * A bordered image container whose border always matches the image size.
 * No fixed height — the container grows to fit the image naturally.
 *
 * All Next.js ImageProps (sizes, priority, quality, placeholder, …) are
 * forwarded to <Image> via rest spread, so nothing is silently dropped.
 */
export default function ImageBox({
  // ── div wrapper props ───────────────────────────────────────────────
  background,
  border = '1px solid rgba(255,255,255,0.08)',
  borderRadius = 20,
  boxShadow,
  padding,
  wrapperStyle,
  imageStyle,
  children,
  // ── image defaults (overridable by caller) ──────────────────────────
  sizes = '(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 516px',
  priority = false,
  width = 800,
  height = 600,
  // ── everything else forwarded to <Image> ────────────────────────────
  style,
  ...imageProps
}: ImageProps & DivProps) {
  return (
    <div
      style={{
        borderRadius,
        background,
        border,
        position: 'relative',
        boxShadow,
        padding,
        ...wrapperStyle,
      }}
    >
      <Image
        {...imageProps}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          ...imageStyle,
          ...style,
        }}
      />
      {children}
    </div>
  )
}
