export const fetchHygraphQuery = async <T>(query: string): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    next: {
      revalidate: 7200
    },
    body: JSON.stringify({ query })
  })

  const { data } = await response.json()

  return data
}
