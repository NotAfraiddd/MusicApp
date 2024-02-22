import InterfaceAvatarMusic from '../interface/InterfaceAvatarMusic'

import BaseWaveMusic from './BaseWaveMusic'

export default function AvatarMusic({ data }: InterfaceAvatarMusic) {
  return (
    <div className='col-span-1 p-3 bg-slate-600'>
      <span className='text-[#38bdf8] font-bold'>Now playing</span>
      <h2 className='font-semibold text-2xl text-[#b9b9b9]'>{data?.name}</h2>
      <div className='flex flex-col items-center justify-center mt-20'>
        <img src={data?.links?.images?.[0]?.url} alt='' className='w-64 object-cover' />
        <div className='flex max-w-64 w-full justify-between items-center mt-5 gap-4'>
          <img
            src={data?.links?.images?.[1]?.url}
            alt=''
            className='w-12 rounded-full animate-spin md:w-14 lg:w-16'
            style={{ animationDuration: '8s' }}
          />
          <span className='text-white font-semibold text-xl break-words'>{data?.author}</span>
        </div>
        <BaseWaveMusic />
      </div>
    </div>
  )
}
