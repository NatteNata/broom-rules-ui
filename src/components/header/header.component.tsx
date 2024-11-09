import { ReactNode } from 'react'

import { cn } from '../../utils'

type Props = {
  children?: ReactNode
  className?: string
}

export const Header = ({ children, className }: Props) => {
  return (
    <header
      className={cn(
        'flex bg-dark-700 border-b border-dark-300 items-center justify-between px-6 py-4',
        className
      )}
    >
      {children}
    </header>
  )
}
