export default interface InterfaceSong {
  name?: string
  author?: string
  url?: string
  id?: number
  links?: {
    images?: {
      url?: string
    }[]
  }
}
