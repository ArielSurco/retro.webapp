'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { COOKIES } from '@constants/cookies'
import { ROUTES } from '@constants/routes'
import { getRouteWithParams } from '@functions/redirect'

interface BoardCard {
  id: string
  content: string
  user: string
}

export interface BoardColumn {
  id: string
  name: string
  cards: BoardCard[]
}

interface Board {
  id: string
  name: string
  columns: BoardColumn[]
}

interface BoardPreview extends Pick<Board, 'id' | 'name'> {}

const boards: Board[] = []

const defaultColumns: BoardColumn[] = [
  {
    id: '1',
    name: 'Went well',
    cards: [],
  },
  {
    id: '2',
    name: 'To improve',
    cards: [],
  },
  {
    id: '3',
    name: 'Action items',
    cards: [],
  },
]

export const getBoards = async (): Promise<BoardPreview[]> => {
  return boards.map(({ id, name }) => ({ id, name }))
}

export const postBoard = async (name: string): Promise<BoardPreview> => {
  const id = String(boards.length + 1)
  const board = { id, name, columns: defaultColumns }

  boards.push(board)

  revalidatePath(ROUTES.home)

  redirect(getRouteWithParams(ROUTES.board, { id }))
}

export const getBoard = async (_id: string): Promise<Board> => {
  const foundBoard = boards.find(({ id }) => id === _id)

  if (!foundBoard) {
    redirect(ROUTES.home)
  }

  return foundBoard
}

export const postBoardCard = async (
  boardId: string,
  columnId: string,
  content: string,
): Promise<BoardCard> => {
  const board = boards.find((board) => board.id === boardId)

  if (!board) {
    redirect(ROUTES.home)
  }

  const column = board.columns.find((column) => column.id === columnId)

  if (!column) {
    redirect(ROUTES.home)
  }

  const id = String(column.cards.length + 1)
  const user = cookies().get(COOKIES.token)?.value as string
  const card = { id, content, user }

  column.cards.push(card)

  revalidatePath(getRouteWithParams(ROUTES.board, { id: boardId }))

  return card
}
