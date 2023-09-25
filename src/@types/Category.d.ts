import { Website } from './Website'

export type Category = {
  slug: string
  title: string
  websites: Website[]
}

export type CategoriesData = {
  categories: Category[]
}

export type SidebarData = {
  sidebar: CategoriesData
}

export type CategoryPageData = {
  category: Category
}
