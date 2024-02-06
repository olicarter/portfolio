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
        'flex flex-col gap-4 max-w-screen-lg p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
