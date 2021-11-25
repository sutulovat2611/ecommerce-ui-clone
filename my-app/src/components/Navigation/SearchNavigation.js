/* React inbuilt */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

/* Icons */
import { BsHeart, BsPerson, BsBag, BsSearch } from "react-icons/bs";

/* Refer to other components */
import SearchBar from "./SearchBar";

//* Importing the scss file for styling */
import "./Navigation.scss";
import "./SearchNavigation.scss";

function SearchNavigation() {
  const [click] = useState(false);
  return (
    <nav className="search-navbar navbar">
      {/* Title */}
      <div className="logo">
        <h2>Blizoo.</h2>
      </div>
      {/* Search Bar */}
      <div className="search-bar-div">
        <BsSearch />
        <SearchBar />
      </div>
      <ul
        className={
          click ? "search-nav-menu nav-menu active" : "search-nav-menu nav-menu"
        }
      >
        <li className="nav-item">
          <Link to="/mans" className="nav-links">
            Man's
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/womans" className="nav-links">
            Woman's
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/fav" className="nav-links">
            <BsHeart />
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/profile" className="nav-links">
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
  );
}

export default SearchNavigation;
