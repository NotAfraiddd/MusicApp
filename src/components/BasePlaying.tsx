import AudioPlayer from 'react-h5-audio-player'
import InterfaceSong from '../interface/InterfaceSong'
import '../styles/BasePlaying.css'
interface BasePlayingProps {
  data: InterfaceSong
  clickNext: () => void
}
function BasePlaying({ data, clickNext }: BasePlayingProps) {
  return (
    <footer className='h-[100px] relative bg-gray-900 w-100 flex items-center justify-center gap-4'>
      <AudioPlayer
        className='bg-gray-900'
        src={data?.url}
        showSkipControls
        showJumpControls={false}
        onClickNext={clickNext}
      />
    </footer>
  )
}

export default BasePlaying
