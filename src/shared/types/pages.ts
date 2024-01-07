import { ReactNode } from 'react'

export interface WithChildren {
  children: ReactNode
}

export interface Page extends WithChildren {}
export interface Layout extends WithChildren {}
export interface Provider<T = void> extends WithChildren {
  value: T
}
