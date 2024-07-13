'use client'

import { useEffect, useState } from 'react'
import { motion, useTime, useTransform, Variants } from 'framer-motion'

export default function NeonLight(props: { index: number }) {
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

  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1, transition: { duration: 0.1 } },
    endPos: {
      left: toggle > 0.5 ? '0%' : '100%',
      transition: {
        duration: Math.random() * 6 + 6,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  }

  return (
    <motion.div
      animate={['visible', 'endPos']}
      className="absolute w-8"
      initial={['hidden']}
      style={{
        backgroundColor: `hsl(${hue}, 100%, 50%)`,
        borderRadius: '1rem',
        boxShadow: `0 0 8rem 4rem hsla(${hue}, 100%, 50%, 50%)`,
        height: '32rem',
        left: toggle > 0.5 ? '100%' : '0%',
        rotate,
        top: `${Math.random() * 50}%`,
      }}
      variants={variants}
    />
  )
}
