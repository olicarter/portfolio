'use client'

import { useEffect, useState } from 'react'
import { motion, useTime, useTransform, Variants } from 'framer-motion'

export default function NeonLight() {
  const [val, setVal] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVal([Math.random(), Math.random()])
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Neon val={val[0] ?? 0} />
      <Neon val={val[1] ?? 1} />
    </>
  )
}

const Neon = (props: { val: number }) => {
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
      left: props.val > 0.5 ? '-25%' : '125%',
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
      className="absolute w-[4vmin]"
      initial={['hidden']}
      style={{
        backgroundColor: `hsl(${hue}, 100%, 50%)`,
        borderRadius: '2vmin',
        boxShadow: `0 0 16vmin 8vmin hsla(${hue}, 100%, 50%, 50%)`,
        height: '64vmin',
        left: props.val > 0.5 ? '90%' : '10%',
        rotate,
        top: `${Math.random() * 50}%`,
      }}
      variants={variants}
    />
  )
}
