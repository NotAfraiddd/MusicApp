import InterfaceSong from './InterfaceSong'

export default interface InterfacePlaying {
  data: InterfaceSong
  clickNext: () => void
  clickPrev: () => void
}
