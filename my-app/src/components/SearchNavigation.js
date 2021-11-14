import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsHeart, BsPerson, BsBag } from "react-icons/bs";

import Button from "react-bootstrap/Button";

import "./Navigation/Navigation.css";
import "./SearchNavigation.css";

function SearchNavigation() {
  const [click] = useState(false);
  return (
    <>
      <nav className="search-navbar navbar">
        <div className= 'logo'><h2>Blizoo.</h2></div>
        <ul className={click ? "search-nav-menu active" : "search-nav-menu"}>
          
          <li className="nav-item">
            <Link to="/client-services" className="nav-links">
              Man's
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/faq" className="nav-links">
              Woman's
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              <BsHeart />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              <BsPerson />
            </Link>
          </li>

          <li className="nav-item">
            <Button className="cart-button">
              <BsBag /> Cart (0){" "}
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SearchNavigation;
