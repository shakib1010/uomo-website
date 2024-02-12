import React from "react"
import "./hero.scss"

export default function Hero() {
  return (
    <section className="hero container">
      <p className="hero-trend">New trend</p>
      <h1 className="hero__title">
        <span className="hero__title-1">SUMMER SALE STYLE STYLISH</span>
        <span className="hero__title-2">WOMENS</span>
      </h1>
      <a className="hero-link" href="#">
        Discover More
      </a>
    </section>
  )
}
