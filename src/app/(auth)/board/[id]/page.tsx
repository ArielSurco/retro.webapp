import type { Page } from '@customTypes/pages'

import { BoardColumn } from '@/boards/components/BoardColumn'
import { getBoard } from '@/boards/services/boards'

export default async function Board({ params }: Page<'id'>) {
  const boardData = await getBoard(params.id)

  return (
    <>
      <h1 className='mb-3'>{boardData.name}</h1>
      <div className='grid h-full grow grid-cols-[repeat(3,_minmax(min-content,_1fr))] gap-5 font-medium'>
        {boardData.columns.map(({ id, name, cards }) => (
          <BoardColumn boardId={boardData.id} cards={cards} id={id} key={id} title={name} />
        ))}
      </div>
    </>
  )
}
