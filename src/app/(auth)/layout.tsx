import { Sidebar } from '@/layout/components/Sidebar'
import { Layout } from '@customTypes/pages'

export default function AuthLayout({ children }: Layout) {
  return (
    <>
      <Sidebar />
      <main className='ms-20 flex h-fit min-h-screen flex-col p-7'>{children}</main>
    </>
  )
}
