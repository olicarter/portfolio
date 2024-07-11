'use client'

import { motion, useTime, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function NeonLight(props: { index: number }) {
  const [toggle, setToggle] = useState(props.index % 2 ? 0 : 1)

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(Math.random())
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const hue = Math.random() * 360
  const time = useTime()
  const rotateStart = Math.random() * 360
  const rotate = useTransform(
    time,
    [0, Math.random() * 10000 + 10000],
    [rotateStart, 360 - rotateStart],
    { clamp: false },
  )

  return (
    <motion.div
      animate={{
        left: toggle > 0.5 ? '0%' : '100%',
        transition: {
          duration: Math.random() * 6 + 6,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
      className="absolute w-8 -z-10"
      initial={{
        left: toggle > 0.5 ? '100%' : '0%',
      }}
      style={{
        boxShadow: `0 0 8rem 4rem hsla(${hue}, 100%, 50%, 50%)`,
        borderRadius: '9999px',
        height: '32rem',
        backgroundColor: `hsl(${hue}, 100%, 50%)`,
        top: `${Math.random() * 50}%`,
        rotate,
      }}
    />
  )
}
