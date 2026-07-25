import NavBar from '../NavBar'
import NoteMeta from '../NoteMeta'
import NoteBody from '../NoteBody'
import Toolbar from '../ToolBar'
import HomeIndicator from '../HomeIndicator'
import './global.css'
import './style.css'

const App = () => {
  return (
    <div className="phone">
      <NavBar />
      <NoteMeta />
      <NoteBody />
      <Toolbar />
      <HomeIndicator />
    </div>
  )
}

export default App;