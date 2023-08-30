type NavListItemProps = {
  title: string
  url: string
}

export const NavListItem = ({ title, url }: NavListItemProps) => (
  <a
    className="rounded-lg border border-gray-200 px-8 py-4 text-center text-lg font-semibold transition-colors hover:cursor-pointer hover:bg-gray-100 hover:underline dark:border-gray-800 dark:hover:bg-gray-900"
    href={`https://${url}`}
  >
    {title}
  </a>
)
