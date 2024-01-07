'use client'

import type { FormEvent } from 'react'

import { Input } from '@components/Input'

import { postBoard } from '../services/boards'

export const NewBoardForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const boardName = formData.get('board') as string

    await postBoard(boardName)
  }

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <Input
        className='p-3 text-sm'
        id='board'
        name='board'
        placeholder='Board name'
        required
        type='text'
      />

      <button
        className='w-20 self-end rounded-[10px] bg-[#414ba4] p-2 text-sm text-white transition-all duration-300 hover:bg-[#273081]'
        type='submit'
      >
        Create
      </button>
    </form>
  )
}
