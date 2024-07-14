'use client'

import { useState } from 'react'
import Image from 'next/image'
import cn from '@/utils/cn'
import styles from './avatar.module.css'

export default function Avatar({ size = 192 }: { size?: number }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={styles.wrapper} style={{ height: size, width: size }}>
      <Image
        alt="Avatar"
        className={cn(styles.avatar, isLoaded && styles.loaded)}
        height={size * 2}
        onLoad={() => setIsLoaded(true)}
        priority
        src="/me.jpg"
        width={size * 2}
      />
    </div>
  )
}
