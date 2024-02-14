import Timer from '../Timer/Timer'
import './Banner.scss'
import jacketImg from './jacket.png'

function Banner() {
  return (
    <div className="container">
      <section className="banner">
        <div className="banner__text">
          <p className="banner__trend">New trend</p>
          <h1 className="banner__title">
            <span>Spring</span>
            <span>Collection</span>
          </h1>
          <a className="banner__link" href="#">
            Shop Now
          </a>
          <Timer />
        </div>
        <div className="banner__img">
          <img src={jacketImg} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Banner
