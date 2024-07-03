import React from "react";
import logo from "../assets/image/Component-2.png"
import "../css/header.css";
import { Link } from "react-router-dom";

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
            <Link to="/Store" className="nav__link">Store</Link>
          </li>

          <li className="nav__item">
            <Link to="/Signup" className="nav__link">Sign up</Link>
          </li>
          <li className="nav__item">
            <Link to="/Store" className="nav__link nav__link--btn btn--show-modal">Shop here</Link>
          </li>
        </ul>
      </nav>
  </div>;
}
