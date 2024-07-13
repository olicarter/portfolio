'use client'

import { useEffect, useState } from 'react'
import styles from './cursor.module.css'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div
      className={styles.cursor}
      style={{ left: mousePosition.x, top: mousePosition.y }}
    />
  )
}
