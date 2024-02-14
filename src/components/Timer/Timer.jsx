import './Timer.scss'

export default function Timer() {
  return (
    <div className="timer">
      <span className="timer__box timer__day">
        <div className="timer__num">05</div>
        <div className="timer__text">Days</div>
      </span>
      <span className="timer__clone">:</span>
      <span className="timer__box timer__hour">
        <div className="timer__num">05</div>
        <div className="timer__text">Hours</div>
      </span>
      <span className="timer__clone">:</span>
      <span className="timer__box timer__min">
        <div className="timer__num">05</div>
        <div className="timer__text">Mins</div>
      </span>
      <span className="timer__clone">:</span>
      <span className="timer__box timer__sec">
        <div className="timer__num">05</div>
        <div className="timer__text">Sec</div>
      </span>
    </div>
  )
}
