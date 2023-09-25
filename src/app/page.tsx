import { Footer } from '@/components/Footer'
import { WebsiteLink } from '@/components/WebsiteLink'

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center px-8 pt-16 text-gray-100">
      <main className="my-auto grid grid-cols-2 gap-4">
        <WebsiteLink title="React.js" url="https://react.dev/" />
        <WebsiteLink title="Next.js" url="https://nextjs.org/" />
      </main>

      <Footer />
    </section>
  )
}
