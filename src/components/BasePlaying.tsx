import AudioPlayer from 'react-h5-audio-player'
import InterfacePlaying from '../interface/InterfacePlaying'
import '../styles/BasePlaying.css'
function BasePlaying({ data, clickNext, clickPrev }: InterfacePlaying) {
  return (
    <footer className='h-[100px] relative bg-gray-900 w-100 flex items-center justify-center gap-4'>
      <AudioPlayer
        className='bg-gray-900'
        src={data?.url}
        showSkipControls
        showJumpControls={false}
        onClickNext={clickNext}
        onClickPrevious={clickPrev}
        onEnded={clickNext}
      />
    </footer>
  )
}

export default BasePlaying
