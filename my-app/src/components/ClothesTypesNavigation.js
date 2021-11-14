import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClothesTypesNavigation.css";
import "./Navigation/Navigation.css"

function ClothesTypesNavigation() {
  const [click] = useState(false);

  return (
    <>
      <nav className="ct-navbar navbar">
        <ul className={click ? "ct-nav-menu active" : "ct-nav-menu"}>
          <li className="nav-item">
            <Link to="/client-services" className="nav-links">
              Top
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/faq" className="nav-links">
              Bottom
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Swim wear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Watch
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Shoes
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Bag
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Accessories
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Cosmetic
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Muslim Wear
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ClothesTypesNavigation;
