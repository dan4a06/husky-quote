import s from './NoteBody.module.css'

const NoteBody = (props) => {
  const {
    phrase
  } = props

  return (
    <div className={s.body}>
      <div className={s.titleLine}>
        <span className={s.word}>
          {phrase}
        </span>
        {/* <span className="lock-emoji">🔒</span> */}
      </div>
    </div>
 )
}

export default NoteBody