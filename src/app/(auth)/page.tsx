import { BoardPreviewCard } from '@/boards/components/BoardPreviewCard'
import { NewBoardCard } from '@/boards/components/NewBoardCard'
import { getBoards } from '@/boards/services/boards'

export default async function Home() {
  const boards = await getBoards()

  return (
    <>
      <h1 className='mb-5 text-3xl font-bold'>Home</h1>
      <section className='flex flex-wrap gap-2'>
        <NewBoardCard />

        {boards.map((board) => (
          <BoardPreviewCard key={board.id} title={board.name}>
            {board.name}
          </BoardPreviewCard>
        ))}
      </section>
    </>
  )
}
