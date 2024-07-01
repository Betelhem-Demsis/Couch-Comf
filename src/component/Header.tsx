import React from "react";
import logo from "../assets/image/Component-2.png"
import "../css/header.css";

export default function Header() {
  return <div>
    <nav className="nav">
        <img
          src={logo}
          alt="sofa logo"
          className="nav__logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#section--1">Store</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--2">Testimonials</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--3">Sign up</a>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link--btn btn--show-modal" href="#"
              >Shop here</a>
          </li>
        </ul>
      </nav>
  </div>;
}
