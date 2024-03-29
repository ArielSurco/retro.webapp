import { cn } from '@functions/classNames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'rounded-xl border border-[#e3ece5] px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-[#c7cfc9]',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'
