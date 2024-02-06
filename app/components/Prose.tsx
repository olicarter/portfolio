import { type ComponentPropsWithoutRef } from 'react'

interface ProseProps extends ComponentPropsWithoutRef<'div'> {}

export default function Prose({ children, className, ...rest }: ProseProps) {
  return (
    <div className="dark:prose-invert prose prose-neutral" {...rest}>
      {children}
    </div>
  )
}
