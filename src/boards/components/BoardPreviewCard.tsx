import { cn } from '@functions/classNames'
import { ReactNode } from 'react'

interface BoardPreviewCardProps {
  title: string
  children: ReactNode
  className?: string
}

export const BoardPreviewCard = ({ className, title, children }: BoardPreviewCardProps) => {
  return (
    <article className='w-40 rounded-[28px] p-3 text-center transition-all duration-300 hover:bg-[#e3ebf2]'>
      <div className='flex w-full flex-col gap-2'>
        <div className={cn('h-[130px] p-[10px]', className)}>{children}</div>
        <h3 className='break-words text-center text-base font-semibold text-black'>{title}</h3>
      </div>
    </article>
  )
}
