import s from './NoteBody.module.css'

const NoteBody = () => {
 return (
  <div className={s.body}>
    <div className={s.titleLine}>
      <span className={s.word}>Привет как у тебя дела, у меня всё хорошо
        но если я буду долго писать этот текст, я надеюсь он перенесётся на другую строкуы
      </span>
      {/* <span className="lock-emoji">🔒</span> */}
    </div>
  </div>
 )
}

export default NoteBody