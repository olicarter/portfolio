'use client'

import { useCallback, type CanvasHTMLAttributes } from 'react'
import { createNoise3D } from 'simplex-noise'

export interface AnimatedGradientProps
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  perf?: number
  speed?: number
  zoom?: number
}

export default function AnimatedGradient({
  perf = 10,
  speed = 5,
  zoom = 5,
  ...props
}: AnimatedGradientProps) {
  const ref = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      const noise3D = createNoise3D()
      const zoomAdjusted = zoom * 1000
      const divisor = zoomAdjusted / perf

      if (canvas === null) return

      // Get the canvas context
      const ctx = canvas.getContext('2d')

      if (ctx === null) return

      // Set the initial time values
      let timeR = 0
      let timeG = 1
      let timeB = 2
      // let timeA = 3

      const draw = () => {
        // Create an image data object
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data

        for (var y = 0; y < canvas.height; y++) {
          for (var x = 0; x < canvas.width; x++) {
            // Get the noise values
            let valueR = noise3D(x / divisor, y / divisor, timeR)
            let valueG = noise3D(x / divisor, y / divisor, timeG)
            let valueB = noise3D(x / divisor, y / divisor, timeB)
            // let valueA = noise3D(x / divisor, y / divisor, timeA)

            // Normalize the values to be between 0 and 1
            valueR = (valueR + 1) / 2
            valueG = (valueG + 1) / 2
            valueB = (valueB + 1) / 2
            // valueA = (valueA + 1) / 2

            // Set the pixel color
            const cell = (y * canvas.width + x) * 4
            data[cell] = valueR * 255 // red
            data[cell + 1] = valueG * 255 // green
            data[cell + 2] = valueB * 255 // blue
            data[cell + 3] = 255 // alpha
            // data[cell + 3] = valueA * 255 // animated alpha
          }
        }

        // Draw the image data to the canvas
        ctx.putImageData(imageData, 0, 0)

        // Increment the time
        const speedAdjusted = speed / zoomAdjusted
        timeR += speedAdjusted
        timeG += speedAdjusted + 0.001
        timeB += speedAdjusted + 0.002
        // timeA += speedAdjusted + 0.003

        // Request the next frame
        requestAnimationFrame(draw)
      }

      const resize = () => {
        canvas.width = canvas.clientWidth / perf
        canvas.height = canvas.clientHeight / perf
      }

      window.addEventListener('resize', resize)

      resize()
      draw()

      return () => {
        window.removeEventListener('resize', resize)
      }
    },
    [perf, speed, zoom],
  )

  return <canvas {...props} ref={ref} />
}
