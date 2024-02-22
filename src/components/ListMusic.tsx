import { download } from '../assets'
import InterfaceMusic from '../interface/InterfaceMusic'
import InterfaceSong from '../interface/InterfaceSong'

export default function ListMusic({ songId, dataMusic, getSrcMusic }: InterfaceMusic) {
  /**
   * choose song
   * @param song
   */
  const handleClickPlaying = (song: InterfaceSong) => {
    if (getSrcMusic) getSrcMusic(song)
  }
  return (
    <div className='col-span-2 bg-slate-800 overflow-y-scroll'>
      <table className='table-auto w-full relative'>
        <thead className='sticky top-0 h-12 text-white bg-slate-600'>
          <tr className='h-12'>
            <th className='w-[10%]'>#</th>
            <th className='w-[60%]'>Song</th>
            <th className='w-[20%]'>Artist</th>
            <th className='w-[10%]'>
              <img src={download} alt='' className='w-8 h-8' />
            </th>
          </tr>
        </thead>
        <tbody className='overflow-hidden overflow-y-auto'>
          {dataMusic.map((item, index) => (
            <tr
              key={index}
              className={`h-12 mt-2  hover:bg-slate-500 hover:text-[#38bdf8] cursor-pointer ${
                songId == item.id ? 'text-green-400' : 'text-slate-300'
              }`}
              onClick={() => handleClickPlaying(item)} // using callback when having argument
            >
              <td className='w-[10%] text-center'>{item.id}</td>
              <td className='w-[60%] text-center'>{item.name}</td>
              <td className='w-[20%] text-center'>{item.author}</td>
              <td className='w-[10%] text-center'>
                <a href={item.url}>
                  <img src={download} alt='' className='w-8 h-8' />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
