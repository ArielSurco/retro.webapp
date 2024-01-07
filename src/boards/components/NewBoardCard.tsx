import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@components/Dialog'

import { PlusIcon } from './BoardIcons'
import { BoardPreviewCard } from './BoardPreviewCard'
import { NewBoardForm } from './NewBoardForm'

export const NewBoardCard = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <BoardPreviewCard className='flex items-center justify-center' title='New Board'>
          <PlusIcon className='h-7 w-7' />
        </BoardPreviewCard>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className='text-lg font-semibold'>Create new board</DialogHeader>
        <NewBoardForm />
      </DialogContent>
    </Dialog>
  )
}
