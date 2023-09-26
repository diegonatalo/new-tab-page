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

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page } = await getCategories()

  return (
    <main className="flex w-full flex-wrap gap-8 p-8 lg:gap-16 lg:p-16">
      {page.categories.map((category) => (
        <section key={category.title} className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-white">{category.title}</h1>

          <div className="flex flex-wrap gap-2">
            {category.websites.map((website) => (
              <WebsiteLink
                key={website.name}
                title={website.name}
                url={website.url}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
