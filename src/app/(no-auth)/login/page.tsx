import { Brand } from '@components/Brand'

import { LoginForm } from '@/auth/components/LoginForm'

export default function Login() {
  return (
    <main className='flex min-h-screen w-screen items-center justify-center p-5'>
      <div className='flex w-96 flex-col gap-6 rounded-[20px] bg-white p-4'>
        <Brand className='m-auto' />
        <LoginForm />
      </div>
    </main>
  )
}
