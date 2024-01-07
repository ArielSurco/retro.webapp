import { Brand } from '@components/Brand'
import { User } from '@components/User'
import { ROUTES } from '@constants/routes'
import Link from 'next/link'

import { sidebarLinks } from '../constants/sidebarLinks'

import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 flex h-screen w-20 flex-col items-center gap-5 bg-white px-1 py-5'>
      <Link href={ROUTES.home}>
        <Brand />
      </Link>

      <div className='h-0 w-full border-b border-b-[#d9dbe9]' />

      <nav className='flex grow flex-col gap-4'>
        {sidebarLinks.map(({ path, icon, ariaLabel }) => (
          <SidebarItem aria-label={ariaLabel} href={path} icon={icon} key={path} />
        ))}
      </nav>

      <User className='h-10 w-10 text-xl' />
    </div>
  )
}
