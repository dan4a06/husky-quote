import { useState } from 'react' 
import NavBar from '../NavBar'
import NoteMeta from '../NoteMeta'
import NoteBody from '../NoteBody'
import Toolbar from '../ToolBar'
import HomeIndicator from '../HomeIndicator'
import './global.css'
import './style.css'

const quotes = [
  'Мой рэп - это молитва, только с бритвою во рту',
  'Я не хочу быть красивым, не хочу быть богатым Я хочу быть автоматом, стреляющим в лица',
  'Я не хочу перепихон, я хочу Иерихон',
  'Мы только мухи в янтаре судьбы',
  'И улыбка — лишь ссадина ниже носа На фотографии семьи, которой нет',
  'Привет, панельный сын панельного отца',
  'Еду по России, не доеду до конца',
  
]

const getRandomNewIndex = (currentIndex, arrayLength) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === currentIndex)
  return newIndex;
}

const App = () => {

  const [currentIndex, setCurredIndex] = useState(Math.floor(Math.random() * quotes.length));

  const handleClick = () => {
    setCurredIndex((prev) => getRandomNewIndex(prev, quotes.length))
  }

  return (
    <div className="phone">
      <NavBar handleClick={handleClick}/>
      <NoteMeta />
      <NoteBody phrase={quotes[currentIndex]}/>
      <Toolbar />
      <HomeIndicator />
    </div>
  )
}

export default App;