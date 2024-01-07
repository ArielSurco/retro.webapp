import { ROUTES } from '@constants/routes'
import { Icon } from '@customTypes/icons'

import { HomeIcon, SettingsIcon } from '../components/SIdebarItemIcons'

interface SidebarLink {
  path: string
  ariaLabel: string
  icon: Icon
}

export const sidebarLinks = [
  {
    path: ROUTES.home,
    ariaLabel: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/settings',
    ariaLabel: 'Settings',
    icon: SettingsIcon,
  },
] as const satisfies Readonly<SidebarLink[]>
