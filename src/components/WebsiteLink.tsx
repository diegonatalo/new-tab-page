type WebsiteLinkProps = {
  title: string
  url: string
}

export const WebsiteLink = ({ title, url }: WebsiteLinkProps) => (
  <a
    className="rounded-lg bg-zinc-200 px-8 py-4 text-center text-lg font-semibold opacity-70 transition-colors hover:bg-sky-500/30 hover:underline hover:opacity-100 dark:bg-gray-800"
    href={url}
  >
    {title}
  </a>
)
