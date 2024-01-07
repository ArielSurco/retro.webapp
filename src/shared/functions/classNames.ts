import { twMerge } from 'tailwind-merge'

type ValidClassName = string | number | boolean | undefined | null

export const cn = (...classNames: ValidClassName[]) => {
  return twMerge(classNames.filter(Boolean).join(' '))
}
