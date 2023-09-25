import { CategoryPageData } from '@/@types/Category'
import { Footer } from '@/components/Footer'
import { WebsiteLink } from '@/components/WebsiteLink'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'

type CategoryProps = {
  params: {
    slug: string
  }
}

const getCategoryWebsites = async (slug: string): Promise<CategoryPageData> => {
  const query = `
    query CategoryWebsites {
      category(where: {slug: "${slug}"}) {
        websites(first: 20) {
          name
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function CategoryPage({
  params: { slug }
}: CategoryProps) {
  const { category } = await getCategoryWebsites(slug)

  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-8 overflow-y-scroll px-8 text-gray-100 xl:px-32">
      <section className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {category?.websites.map((website) => (
          <WebsiteLink
            key={website.name}
            title={website.name}
            url={website.url}
          />
        ))}
      </section>

      <Footer />
    </main>
  )
}
