import { type ComponentPropsWithoutRef } from 'react'

interface ProseProps extends ComponentPropsWithoutRef<'div'> {}

export default function Prose({ children, className, ...rest }: ProseProps) {
  return (
    <div className="dark:prose-invert max-w-none prose prose-neutral" {...rest}>
      {children}
    </div>
  )
}
