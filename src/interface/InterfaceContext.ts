export default interface InterfaceContext {
  listSongs: {
    name: string
    author: string
    url: string
    id: number
    links: {
      images: {
        url: string
      }[]
    }
  }[]
}
