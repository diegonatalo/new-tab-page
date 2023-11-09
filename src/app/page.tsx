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
    <main className="flex h-full items-start justify-between gap-6 px-8 py-16">
      <div className="flex w-full max-w-[50%] flex-col items-center gap-6">
        <section className="grid grid-cols-2 gap-3">
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

      <div className="hidden self-stretch border-l border-l-gray-800 xl:block" />

      <div className="flex w-full max-w-[50%] flex-col items-center gap-6">
        <section className="grid grid-cols-4 gap-3">
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
