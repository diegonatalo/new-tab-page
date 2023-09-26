import { Website } from './Website'

export type Category = {
  slug: string
  title: string
  websites: Website[]
}

type PageInfo = {
  slug: string
  categories: Category[]
}

export type PageData = {
  page: PageInfo
}
