'use client'

import { useEffect, useState } from 'react'
import styles from './cursor.module.css'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  })
  const [isMouseOnSreen, setIsMouseOnSreen] = useState(false)

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseout', () => setIsMouseOnSreen(false))
    window.addEventListener('mouseover', () => setIsMouseOnSreen(true))
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseout', () => setIsMouseOnSreen(false))
      window.removeEventListener('mouseover', () => setIsMouseOnSreen(true))
    }
  }, [])

  const hasMouse = window.matchMedia('(pointer: fine)').matches

  if (!hasMouse || !isMouseOnSreen) return null

  return (
    <motion.div
      className={styles.cursor}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  )
}
