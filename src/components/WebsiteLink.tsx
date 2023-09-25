type WebsiteLinkProps = {
  title: string
  url: string
}

export const WebsiteLink = ({ title, url }: WebsiteLinkProps) => (
  <a
    className="rounded-lg bg-gray-800 px-8 py-4 text-center text-lg font-semibold transition-colors hover:bg-sky-500/30 hover:underline"
    href={url}
  >
    {title}
  </a>
)
