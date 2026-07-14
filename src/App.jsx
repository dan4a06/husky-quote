import Toolbar from './Toolbar.jsx'

const App = () => {
  return (
    <div className="phone">
      <div className="nav-bar">
        <button className="back-btn">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M10 1L1.5 9L10 17" stroke="#ffc02e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Все iCloud
        </button>

        <div className="nav-right">
          <button className="icon-btn" aria-label="add person">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
              <circle cx="9" cy="6" r="4.3" stroke="#ffc02e" strokeWidth="1.5"/>
              <path d="M2 18c0-4 3.2-6.5 7-6.5s7 2.5 7 6.5" stroke="#ffc02e" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="19" cy="13.5" r="4.2" fill="#1c1c1e" stroke="#ffc02e" strokeWidth="1.3"/>
              <path d="M19 11.5v4M17 13.5h4" stroke="#ffc02e" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </button>

          <button className="icon-btn share-highlight" aria-label="share">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none">
              <path d="M9.5 1v13" stroke="#ffc02e" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M4.5 6L9.5 1L14.5 6" stroke="#ffc02e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10v9a1.5 1.5 0 0 0 1.5 1.5h12A1.5 1.5 0 0 0 17 19v-9" stroke="#ffc02e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="note-meta">севодня</div>

      <div className="note-body">
        <div className="note-title-line">
          <span className="word">Привет как у тебя дела, у меня всё хорошо
            но если я буду долго писать этот текст, я надеюсь он перенесётся на другую строкуы
          </span>
          {/* <span className="lock-emoji">🔒</span> */}
        </div>
      </div>

      <Toolbar />

      <div className="home-indicator"></div>
    </div>  
  )
}

export default App;