'use client'

import { Input } from '@components/Input'
import { FormEvent } from 'react'

import { login } from '../services/login'

export const LoginForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string

    await login(name)
  }

  return (
    <form className='flex w-full flex-col gap-6' onSubmit={handleSubmit}>
      <Input className='w-full' id='name' name='name' placeholder='Nombre' type='text' />
      <button
        className='w-full rounded-[10px] bg-[#414ba4] px-4 py-3 text-base text-white transition-all duration-300 hover:bg-[#273081]'
        type='submit'
      >
        Log in
      </button>
    </form>
  )
}
