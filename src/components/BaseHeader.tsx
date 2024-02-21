import { music } from '../assets'

function BaseHeader() {
  return (
    <header className='h-[100px] bg-gray-900 w-100 flex items-center justify-center gap-4'>
      <img src={music} alt='' className='w-8 h-8' />
      <span className='text-white text-[35px]'>Music</span>
    </header>
  )
}

export default BaseHeader
