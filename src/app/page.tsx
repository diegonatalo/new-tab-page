import { PageData } from '@/@types/Category'
import { WebsiteLink } from '@/components/WebsiteLink'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'

const getSites = async (): Promise<PageData> => {
  const query = `
    query getSites {
      page(where: {slug: "home"}) {
        categories(first: 2) {
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

const getPackages = async (): Promise<PageData> => {
  const query = `
    query getPackages {
      page(where: {slug: "home"}) {
        categories(skip: 2, first: 15) {
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
  const { page: packages } = await getPackages()
  const { page: sites } = await getSites()

  return (
    <main className="flex h-full items-start justify-between gap-3 p-3 lg:gap-8 lg:p-8">
      <div className="flex w-full justify-center py-8 sm:max-w-[50%]">
        <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {sites.categories.map((category) =>
            category.websites.map((website) => (
              <WebsiteLink
                key={website.name}
                title={website.name}
                url={website.url}
              />
            ))
          )}
        </section>
      </div>

      <div className="block self-stretch border-l border-l-gray-800" />

      <div className="flex w-full justify-center py-8 sm:max-w-[50%]">
        <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {packages.categories.map((category) =>
            category.websites.map((website) => (
              <WebsiteLink
                key={website.name}
                title={website.name}
                url={website.url}
              />
            ))
          )}
        </section>
      </div>
    </main>
  )
}
