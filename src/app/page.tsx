import { PageData } from '@/@types/Category'
import { WebsiteLink } from '@/components/WebsiteLink'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'

const getCategories = async (): Promise<PageData> => {
  const query = `
    query CategoryWebsites {
      page(where: {slug: "home"}) {
        categories(first: 15 ) {
          title
          websites {
            name
            url
          }
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { page } = await getCategories()

  return (
    <main className="grid auto-rows-fr grid-cols-8 gap-3 p-8">
      {page.categories.map((category) =>
        category.websites.map((website) => (
          <WebsiteLink
            key={website.name}
            title={website.name}
            url={website.url}
          />
        ))
      )}
    </main>
  )
}
