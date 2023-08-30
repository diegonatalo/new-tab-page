import { ComponentProps, ReactNode } from 'react'

type NavListProps = ComponentProps<'div'> & {
  children: ReactNode
}

export const NavList = ({ children, ...props }: NavListProps) => (
  <div className={`flex flex-col gap-2 ${props.className}`}>{children}</div>
)
