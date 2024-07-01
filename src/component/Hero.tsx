import React from 'react'
import sofa from "../assets/image/Component-1.png"
import "../css/hero.css"

export default function Hero() {
  return (
    <div className='hero'>
      <div className="header__title">
        <h1>
          Our Couches       <span className="highlight">Your</span>
          <br />
          <span className="highlight">Comfort </span>    Companion</h1>
        <p>delivering comfort to your door steps</p>
        <button className="btn--text btn--scroll-to">start shopping ➡</button>
        </div>
        <img
          src={sofa}
          className="header__img"
          alt="sofas"
        />
      </div>
  )
}
