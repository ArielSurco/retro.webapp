import { Layout } from '@customTypes/pages'

import { Sidebar } from '@/layout/components/Sidebar'

export default function AuthLayout({ children }: Layout) {
  return (
    <>
      <Sidebar />
      <main className='ms-20 h-fit min-h-screen p-7'>{children}</main>
    </>
  )
}
