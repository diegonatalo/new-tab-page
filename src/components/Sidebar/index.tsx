import { SidebarData } from '@/@types/Category'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { SidebarItem } from './SidebarItem'

const getCategories = async (): Promise<SidebarData> => {
  const query = `
    query SidebarQuery {
      sidebar(where: {id: "clmqz6enf29vr0blt8vqdjyhq"}) {
        categories(first: 15) {
          title
          slug
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export const Sidebar = async () => {
  const { sidebar } = await getCategories()

  return (
    <nav className="flex min-h-screen w-full max-w-[350px] flex-col gap-4 !overflow-y-scroll bg-black p-4">
      <SidebarItem category={{ title: 'Início', slug: '', websites: [] }} />
      {sidebar.categories.map((category) => (
        <SidebarItem key={category.slug} category={category} />
      ))}
    </nav>
  )
}
