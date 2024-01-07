'use client'

import type { Icon } from '@customTypes/icons'

import { cn } from '@functions/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, type ComponentProps } from 'react'

interface SidebarItemProps extends Omit<ComponentProps<typeof Link>, 'className'> {
  icon: Icon
}

export const SidebarItem = ({ icon: IconComponent, ...props }: SidebarItemProps) => {
  const pathname = usePathname()

  const isActive = useMemo(() => {
    return pathname === props.href
  }, [pathname, props.href])

  return (
    <Link
      className='flex h-14 w-14 items-center justify-center rounded-[10px] bg-transparent text-current transition-all duration-300 hover:bg-[#f7fafd] hover:text-[#414ba4]'
      {...props}
    >
      <IconComponent
        className={cn(
          'h-6 w-6',
          isActive &&
            'odd:fill-[#414ba4] odd:stroke-[#414ba4] even:fill-[#414ba4] even:stroke-[#414ba4]',
        )}
      />
    </Link>
  )
}
