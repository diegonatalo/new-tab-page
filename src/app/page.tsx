import { NavList } from '@/components/NavList'
import { NavListItem } from '@/components/NavListItem'

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center px-8">
      <main className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <NavList className="text-emerald-500">
          <NavListItem title="Roadmaps" url="roadmap.sh/roadmaps" />
          <NavListItem title="Can I use?" url="caniuse.com/" />
          <NavListItem
            title="Tailwind CheatSheet"
            url="tailwindcomponents.com/cheatsheet/"
          />
          <NavListItem title="Haikei" url="app.haikei.app" />
          <NavListItem title="Shape Divider" url="shapedivider.app" />
          <NavListItem title="SVG Backgrounds" url="svgbackgrounds.com" />
        </NavList>

        <NavList className="text-sky-500">
          <NavListItem title="Tailwind CSS" url="tailwindcss.com/" />
          <NavListItem title="Styled-Components" url="styled-components.com/" />
          <NavListItem title="Stitches" url="stitches.dev/" />
          <NavListItem title="Vanilla Extract" url="vanilla-extract.style/" />
          <NavListItem title="Radix UI" url="www.radix-ui.com/" />
          <NavListItem title="Shadcn UI" url="ui.shadcn.com/" />
          <NavListItem title="Chakra UI" url="chakra-ui.com/" />
          <NavListItem title="Material UI" url="mui.com/" />
        </NavList>

        <NavList className="text-purple-500">
          <NavListItem
            title="React Icons"
            url="react-icons.github.io/react-icons/"
          />
          <NavListItem title="Phosphor Icons" url="phosphoricons.com" />
          <NavListItem title="Lucide Icons" url="lucide.dev/" />
          <NavListItem title="UI Ball | Loaders" url="uiball.com/loaders/" />
          <NavListItem title="Framer Motion" url="www.framer.com/motion/" />
        </NavList>

        <NavList className="text-rose-500">
          <NavListItem title="React" url="react.dev/" />
          <NavListItem title="Next" url="nextjs.org/" />
          <NavListItem title="React Hook Form" url="www.react-hook-form.com/" />
          <NavListItem title="Zod" url="zod.dev/" />
          <NavListItem title="Redux" url="redux.js.org/" />
          <NavListItem title="Zustand" url="zustand-demo.pmnd.rs/" />
          <NavListItem title="Jotai" url="jotai.org/" />
        </NavList>

        <NavList className="text-orange-500">
          <NavListItem title="Clerk" url="clerk.com/" />
          <NavListItem title="SWR" url="swr.vercel.app/" />
          <NavListItem title="React Query" url="tanstack.com/query/latest/" />
          <NavListItem title="Apollo" url="www.apollographql.com/" />
          <NavListItem title="Strapi" url="strapi.io/" />
          <NavListItem title="Hygraph" url="hygraph.com/" />
          <NavListItem title="Stripe" url="stripe.com/" />
        </NavList>

        <NavList className="text-amber-500">
          <NavListItem title="Jest" url="jestjs.io/" />
          <NavListItem
            title="Testing Library"
            url="https://testing-library.com/docs/react-testing-library/intro/"
          />
          <NavListItem title="Playwright" url="playwright.dev/" />
          <NavListItem title="date-fns" url="date-fns.org/" />
          <NavListItem title="Day.js" url="day.js.org/en/" />
        </NavList>
      </main>

      <footer className="mb-4 mt-auto text-sm text-gray-500">
        Made with ❤️ by Diego Natalo
      </footer>
    </section>
  )
}
