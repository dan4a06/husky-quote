const Toolbar = () => {
  return (
    <div className="toolbar">
        <button aria-label="delete">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M1 5h18" stroke="#ffc02e" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M6 5V2.5A1.5 1.5 0 0 1 7.5 1h5A1.5 1.5 0 0 1 14 2.5V5" stroke="#ffc02e" strokeWidth="1.6"/>
            <path d="M3.5 5l1 14.5A1.5 1.5 0 0 0 6 21h8a1.5 1.5 0 0 0 1.5-1.5L16.5 5" stroke="#ffc02e" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M8 9v8M12 9v8" stroke="#ffc02e" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        <button aria-label="checklist">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9.5" stroke="#ffc02e" strokeWidth="1.6"/>
            <path d="M6.5 11.3l2.7 2.7l6-6.4" stroke="#ffc02e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button aria-label="camera">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <rect x="1" y="4" width="22" height="15" rx="2.5" stroke="#ffc02e" strokeWidth="1.6"/>
            <path d="M8 4l1.6-2.5h4.8L16 4" stroke="#ffc02e" strokeWidth="1.6" strokeLinejoin="round"/>
            <circle cx="12" cy="11.5" r="4" stroke="#ffc02e" strokeWidth="1.6"/>
          </svg>
        </button>

        <button aria-label="draw">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9.5" stroke="#ffc02e" strokeWidth="1.6"/>
            <path d="M7 14l1-3.3L13.5 5.2a1.4 1.4 0 0 1 2 0l.8.8a1.4 1.4 0 0 1 0 2L10.8 13L7 14z" stroke="#ffc02e" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
        </button>

        <button aria-label="new note">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M15.5 2.5l4 4L8 18l-5 1 1-5L15.5 2.5z" stroke="#ffc02e" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
  )
}

export default Toolbar;