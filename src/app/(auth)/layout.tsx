import { Layout } from '@customTypes/pages'

import { Sidebar } from '@/layout/components/Sidebar'

export default function AuthLayout({ children }: Layout) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
