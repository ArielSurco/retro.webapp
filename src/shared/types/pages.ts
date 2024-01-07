import { ReactNode } from 'react'

export interface WithChildren {
  children: ReactNode
}

export interface Page<T extends string = ''> {
  params: {
    [key in T]: string
  }
}

export interface Layout extends WithChildren {}
export interface Provider<T = void> extends WithChildren {
  value: T
}
