interface BoardCardProps {
  user: string
  content: string
}

export const BoardCard = ({ user, content }: BoardCardProps) => {
  return (
    <article className='rounded-[10px] bg-white'>
      <p className='p-4 text-sm font-normal'>{content}</p>
      <hr />
      <footer className='flex p-[10px] font-medium'>
        <p className='text-sm'>{user}</p>
      </footer>
    </article>
  )
}
