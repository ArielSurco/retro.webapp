import type { Icon } from '@customTypes/icons'

export const PlusIcon: Icon = ({ ...props }) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
        stroke='#313342'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M12 8.40002V15.6'
        stroke='#313342'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M8.40002 12H15.6'
        stroke='#313342'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}

export const SendIcon: Icon = ({ ...props }) => {
  return (
    <svg
      fill='currentColor'
      height='200px'
      stroke='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
    </svg>
  )
}
