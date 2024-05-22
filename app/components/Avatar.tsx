'use client'

import Image from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Avatar({ size = 192 }: { size?: number }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="bg-neutral-50 overflow-hidden place-self-center relative rounded-full shrink-0"
      style={{ height: size, width: size }}
    >
      <Image
        alt="Oli Carter avatar"
        className={twMerge(
          'bottom-3 duration-500 relative rounded-full transition-opacity',
          isLoaded ? 'opacity-100' : 'opacity-0',
        )}
        height={size * 2}
        onLoad={() => setIsLoaded(true)}
        priority
        src="/me.jpg"
        width={size * 2}
      />
    </div>
  )
}
