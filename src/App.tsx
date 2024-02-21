import AvatarMusic from './components/AvatarMusic'
import BasePlaying from './components/BasePlaying'
import BaseHeader from './components/BaseHeader'
import ListMusic from './components/ListMusic'
import { ListSongs } from './context'
import './styles/Layout.css'
import DataSongs from './data/songs.json'
import 'react-h5-audio-player/lib/styles.css'
import { useEffect, useState } from 'react'
import InterfaceSong from './interface/InterfaceSong'
function App() {
  const [song, setSong] = useState<InterfaceSong>(DataSongs[0])
  const [idSong, setIdSong] = useState(0)
  const getDataMusic = (data: InterfaceSong) => {
    setSong(data)
  }

  const handleClick = () => {
    if (song) {
      const isPlaying = DataSongs.findIndex((item) => item.id == song.id) + 1
      setIdSong(isPlaying)
    }
  }

  useEffect(() => {
    const detailSong = DataSongs.find((item) => item.id == idSong)
    if (detailSong) setSong(detailSong)
    console.log(song)
  }, [idSong])

  return (
    <div className='bg-[#e6effa] min-h-screen'>
      <ListSongs.Provider value={{ listSongs: DataSongs }}>
        <BaseHeader />
        <div className='lg:grid lg:grid-cols-3 content'>
          <AvatarMusic />
          <ListMusic getSrcMusic={getDataMusic} />
        </div>
        <BasePlaying data={song} clickNext={handleClick} />
      </ListSongs.Provider>
    </div>
  )
}

export default App
