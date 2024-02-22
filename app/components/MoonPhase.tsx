'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function MoonPhase() {
  const [lunarAgePercent, setLunarAgePercent] = useState(0)
  const phase = (lunarAgePercent * 360 + 180) % 360

  useEffect(() => {
    const animation = () => {
      setLunarAgePercent(p => (p + 0.0005) % 1)
      requestAnimationFrame(animation)
    }
    requestAnimationFrame(animation)
  }, [])

  return (
    <div className="h-full relative rounded-full w-full">
      <div className="absolute h-full w-0.5 bg-yellow-50 left-1/2 z-10 -translate-x-1/2" />
      <div
        className={clsx(
          'absolute bg-gradient-to-r from-50% h-full overflow-hidden rounded-full to-50% w-full z-10',
          phase < 90 && 'from-yellow-50 to-yellow-50',
          phase >= 90 && phase < 180 && 'from-neutral-900 to-neutral-900',
          phase >= 180 && phase < 270 && 'from-neutral-900 to-neutral-900',
          phase >= 270 && 'from-yellow-50 to-transparent',
        )}
        style={{ transform: `rotateY(${phase}deg)` }}
      />
      <div
        className={clsx(
          'absolute bg-gradient-to-r from-50% h-full rounded-full to-50% w-full',
          phase < 90 && 'from-yellow-50 to-neutral-900',
          phase >= 90 && phase < 180 && 'from-yellow-50 to-neutral-900',
          phase >= 180 && phase < 270 && 'from-neutral-900 to-yellow-50',
          phase >= 270 && 'from-neutral-900 to-yellow-50',
        )}
      />
    </div>
  )
}
