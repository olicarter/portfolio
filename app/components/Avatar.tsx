'use client'

import Image from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Avatar() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="bg-neutral-50 h-48 overflow-hidden place-self-center relative rounded-full shrink-0 w-48">
      <Image
        alt="Oli Carter avatar"
        className={twMerge(
          'bottom-3 duration-500 relative rounded-full transition-opacity',
          isLoaded ? 'opacity-100' : 'opacity-0',
        )}
        height={256}
        onLoad={() => setIsLoaded(true)}
        priority
        src="/me.jpg"
        width={256}
      />
    </div>
  )
}
