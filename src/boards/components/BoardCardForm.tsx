'use client'

import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'

import { postBoardCard } from '../services/boards'

import { SendIcon } from './BoardIcons'

interface BoardCardFormProps {
  boardId: string
  columnId: string
}

export const BoardCardForm = ({ boardId, columnId }: BoardCardFormProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = event.target

    textArea.style.height = '24px'
    textArea.style.height = `${textArea.scrollHeight}px`

    setInputValue(textArea.value)
  }

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    await postBoardCard(boardId, columnId, inputValue)

    setInputValue('')
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit()
    }
  }

  return (
    <form className='h-fit w-full rounded-[10px] bg-white' onSubmit={handleSubmit}>
      <div className='flex p-[10px]'>
        <textarea
          className='h-6 w-full resize-none bg-inherit text-sm focus-visible:outline-none'
          id='content'
          name='content'
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          placeholder='Press Enter to Add Card'
          value={inputValue}
        />
      </div>
      <hr />
      <div className='flex h-fit justify-end p-[10px]'>
        <button className='h-fit w-fit' type='submit'>
          <SendIcon className='h-4 w-4 fill-[#a0a3bd] transition-all duration-300 hover:fill-[#414ba4]' />
        </button>
      </div>
    </form>
  )
}
