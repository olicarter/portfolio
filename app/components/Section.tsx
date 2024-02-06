import { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {}

export default function Section({
  children,
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      className={twMerge(
        'gap-4 grid items-center justify-items-stretch md:gap-8 md:grid-cols-2 md:p-8 p-4 sm:gap-6 sm:p-6 w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
