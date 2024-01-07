'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { COOKIES } from '@/shared/constants/cookies'

export const login = async (name: string) => {
  cookies().set(COOKIES.token, name)

  redirect('/')
}
