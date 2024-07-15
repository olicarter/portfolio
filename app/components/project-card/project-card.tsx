'use client'

import { useRef, type HTMLAttributes } from 'react'
import styles from './project-card.module.css'
import cn from '@/utils/cn'
import {
  motion,
  type MotionProps,
  useScroll,
  useTransform,
} from 'framer-motion'

export type ProjectCardProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    scrollAnimation?: boolean
  }

export default function ProjectCard({
  className,
  scrollAnimation,
  ...props
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])
  const top = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0vmin', '0vmin', '12vmin'],
  )

  return (
    <motion.div
      className={cn(styles.project, className)}
      ref={ref}
      style={{
        opacity: scrollAnimation ? opacity : 1,
        originY: 1,
        scale: scrollAnimation ? scale : 1,
        top: scrollAnimation ? top : 0,
      }}
      {...props}
    />
  )
}
