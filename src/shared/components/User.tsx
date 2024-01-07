import { COOKIES } from '@constants/cookies'
import { cn } from '@functions/classNames'
import { cookies } from 'next/headers'
import { ComponentProps } from 'react'

interface UserProps extends ComponentProps<'span'> {}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ')

  return firstName && lastName ? `${firstName[0]}${lastName[0]}` : firstName[0]
}

export const User = ({ className, ...props }: UserProps) => {
  const name = cookies().get(COOKIES.token)?.value as string

  return (
    <span
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c68c] text-xs text-white',
        className,
      )}
      {...props}
    >
      {getInitials(name)}
    </span>
  )
}
