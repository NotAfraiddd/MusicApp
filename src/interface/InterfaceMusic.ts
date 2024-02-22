import InterfaceSong from './InterfaceSong'

export default interface InterfaceMusic {
  songId: number
  dataMusic: InterfaceSong[]
  getSrcMusic?: (value: object) => void
}
