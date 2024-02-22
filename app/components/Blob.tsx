'use client'

import { type ComponentPropsWithoutRef, useCallback, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

const noise3D = createNoise3D(Math.random)
const devicePixelRatio = 1

interface BlobProps extends ComponentPropsWithoutRef<'canvas'> {}

export default function Blob(props: BlobProps) {
  const timeRef = useRef(0)

  const ref = useCallback((canvas: HTMLCanvasElement | null) => {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = width * devicePixelRatio
    canvas.height = height * devicePixelRatio
    ctx.scale(devicePixelRatio, devicePixelRatio)

    const draw = () => {
      const imageData = ctx.createImageData(
        width * devicePixelRatio,
        height * devicePixelRatio,
      )
      const data = imageData.data

      const centerX = (width * devicePixelRatio) / 2
      const centerY = (height * devicePixelRatio) / 2
      const maxRadius = Math.sqrt(width * width + height * height) / 2.5

      for (let x = 0; x < width * devicePixelRatio; x++) {
        for (let y = 0; y < height * devicePixelRatio; y++) {
          const dx = centerX - x
          const dy = centerY - y
          const angle = Math.atan2(dy, dx) + Math.PI
          const radius =
            maxRadius *
            (0.5 +
              0.025 *
                noise3D(Math.cos(angle), Math.sin(angle), timeRef.current))
          const cell = (x + y * width * devicePixelRatio) * 4
          if (dx * dx + dy * dy <= radius * radius) {
            data[cell] = 244
            data[cell + 1] = 63
            data[cell + 2] = 94
            data[cell + 3] = 255 // alpha
          } else {
            data[cell + 3] = 0 // alpha
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)

      timeRef.current += 0.01
      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return <canvas className={props.className} ref={ref} />
}
