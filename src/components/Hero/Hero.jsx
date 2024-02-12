import React from 'react'
import './hero.scss'

export default function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <p className="hero__trend">New trend</p>
        <h1 className="hero__title">
          <span>SUMMER SALE STYLE STYLISH</span>
          <span>WOMENS</span>
        </h1>
        <a className="hero__link" href="#">
          Discover More
        </a>

        <p className="hero__trend hero__scroll">Scroll</p>
      </section>
    </div>
  )
}
