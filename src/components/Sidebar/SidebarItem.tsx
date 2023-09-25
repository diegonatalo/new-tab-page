'use client'

import { Category } from '@/@types/Category'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarItemProps = {
  category: Category
}

export const SidebarItem = ({ category }: SidebarItemProps) => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <Link
      className={`w-full rounded-lg p-4 text-lg font-bold transition-colors ${
        pathname !== `/${category.slug}`
          ? 'hover:bg-gray-800'
          : 'bg-sky-500/30 text-sky-300'
      }`}
      href={`/${category.slug}`}
    >
      {category.title}
    </Link>
  )
}
