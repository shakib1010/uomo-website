import './ProductCard.scss'
import heart from './heart.svg'

export default function ProductCard({ imgUrl, category, title, price }) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={imgUrl} alt={`Image of`} />
      </div>

      <div className="product-card__details">
        <div className="product-card__details--left">
          <p>{category}</p>
          <h6>{title}</h6>
          <p>${price}</p>
          <div className="product-card__review">
            <span>⭐⭐⭐⭐⭐</span>
            <p>8k+ reviews</p>
          </div>
        </div>

        <div className="product-card__right">
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  )
}
