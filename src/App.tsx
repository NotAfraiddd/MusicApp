import AvatarMusic from './components/AvatarMusic'
import BasePlaying from './components/BasePlaying'
import BaseHeader from './components/BaseHeader'
import ListMusic from './components/ListMusic'
import './styles/Layout.css'
import DataSongs from './data/songs.json'
import 'react-h5-audio-player/lib/styles.css'
import { useEffect, useState } from 'react'
import InterfaceSong from './interface/InterfaceSong'
function App() {
  const [song, setSong] = useState<InterfaceSong>(DataSongs[0])
  const [idSong, setIdSong] = useState(0)

  /**
   * get data of a song
   * @param data
   */
  const getDataMusic = (data: InterfaceSong) => {
    setSong(data)
  }

  /**
   * next song
   */
  const handleClickNext = () => {
    if (song) {
      const isPlaying = DataSongs.findIndex((item) => item.id == song.id)
      isPlaying <= DataSongs.length ? setIdSong(isPlaying + 1) : setIdSong(DataSongs.length)
    }
  }
  /**
   * prev song
   */
  const handleClickPrev = () => {
    if (song) {
      const isPlaying = DataSongs.findIndex((item) => item.id == song.id)
      isPlaying == 0 ? setIdSong(0) : setIdSong(isPlaying - 1)
    }
  }

  useEffect(() => {
    const detailSong = DataSongs.find((item) => item.id == idSong)
    if (detailSong) setSong(detailSong)
  }, [idSong, song])

  return (
    <div className='bg-[#e6effa] min-h-screen'>
      <BaseHeader />
      <div className='lg:grid lg:grid-cols-3 content'>
        <AvatarMusic data={song} />
        <ListMusic songId={idSong} dataMusic={DataSongs} getSrcMusic={getDataMusic} />
      </div>
      <BasePlaying data={song} clickNext={handleClickNext} clickPrev={handleClickPrev} />
    </div>
  )
}

export default App
