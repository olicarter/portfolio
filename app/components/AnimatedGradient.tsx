'use client'

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

const noise3D = createNoise3D()
const perf = 4 // Consisten 60FPS average
const speed = 0.003
const divisor = 1000 / perf

interface AnimatedGradientProps extends ComponentPropsWithoutRef<'canvas'> {}

export default function AnimatedGradient(props: AnimatedGradientProps) {
  const ref = useCallback((canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    let timeR = 0
    let timeG = 1
    let timeB = 2

    const draw = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
          // Get the noise values
          let valueR = noise3D(x / divisor, y / divisor, timeR)
          let valueG = noise3D(x / divisor, y / divisor, timeG)
          let valueB = noise3D(x / divisor, y / divisor, timeB)

          // Normalize the values to be between 0 and 1
          valueR = (valueR + 1) / 2
          valueG = (valueG + 1) / 2
          valueB = (valueB + 1) / 2

          // Set the pixel color
          const cell = (y * canvas.width + x) * 4
          data[cell] = valueR * 255 // red
          data[cell + 1] = valueG * 255 // green
          data[cell + 2] = valueB * 255 // blue
          data[cell + 3] = 255 // alpha
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Increment the times differently to get different animations
      timeR += speed
      timeG += speed + 0.001
      timeB += speed + 0.002

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
  }, [])

  return <canvas className={props.className} ref={ref} />
}
