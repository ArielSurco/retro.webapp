'use server'

import { ROUTES } from '@constants/routes'
import { getRouteWithParams } from '@functions/redirect'
import { redirect } from 'next/navigation'

interface Board {
  id: number
  name: string
}

const boards: Board[] = [
  {
    id: 1,
    name: 'Retro 12/12/2020',
  },
]

export const getBoards = async (): Promise<Board[]> => {
  return boards
}

export const postBoard = async (name: string): Promise<Board> => {
  const id = boards.length + 1
  const board = { id, name }

  boards.push(board)

  redirect(getRouteWithParams(ROUTES.board, { id }))
}
