import { cn } from '@functions/classNames'

import { BoardCard } from './BoardCard'
import { BoardCardForm } from './BoardCardForm'

interface BoardColumnProps {
  className?: string
  id: string
  title: string
  boardId: string
  cards: {
    id: string
    user: string
    content: string
  }[]
}

export const BoardColumn = ({ className, id, title, boardId, cards }: BoardColumnProps) => {
  return (
    <section
      className={cn(
        'flex h-fit min-h-full w-full min-w-56 flex-col gap-3 rounded-[10px] bg-[#f1f5f9] p-[10px]',
        className,
      )}
    >
      <h2>{title}</h2>
      <BoardCardForm boardId={boardId} columnId={id} />
      {cards.map(({ id, user, content }) => (
        <BoardCard content={content} key={id} user={user} />
      ))}
    </section>
  )
}
