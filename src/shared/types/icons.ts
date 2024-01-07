import { ComponentProps } from 'react'

export type Icon = (props: Omit<ComponentProps<'svg'>, 'children'>) => JSX.Element
