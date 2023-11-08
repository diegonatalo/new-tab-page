type WebsiteLinkProps = {
  title: string
  url: string
}

export const WebsiteLink = ({ title, url }: WebsiteLinkProps) => (
  <a
    className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-800 p-4 text-lg opacity-70 hover:opacity-100"
    href={url}
  >
    {title}
  </a>
)
