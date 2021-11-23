/* React inbuilt */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* CSS files*/
import "./ClothesTypesNavigation.scss";
import "./Navigation.scss";

function ClothesTypesNavigation() {
  const [click] = useState(false);

  return (
    <>
      <nav className="ct-navbar navbar">
        <ul
          className={
            click ? "ct-nav-menu nav-menu active" : "ct-nav-menu nav-menu"
          }
        >
          <li className="nav-item">
            <Link to="/top" className="nav-links">
              Top
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/bottom" className="nav-links">
              Bottom
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/swim-wear" className="nav-links">
              Swim wear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/watch" className="nav-links">
              Watch
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/shoes" className="nav-links">
              Shoes
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/bag" className="nav-links">
              Bag
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/accessories" className="nav-links">
              Accessories
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cosmetic" className="nav-links">
              Cosmetic
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/muslim-wear" className="nav-links">
              Muslim Wear
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ClothesTypesNavigation;
