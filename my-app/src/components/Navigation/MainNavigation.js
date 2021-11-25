/* React inbuilt */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Refer to other components */
import Dropdown from "./Dropdown";

/* Importing the scss file for styling */
import "./MainNavigation.scss";
import "./Navigation.scss";

function MainNavigation() {
  const [click] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="main-navbar navbar">
        <ul
          className={
            click ? "main-nav-menu nav-manu active" : "main-nav-menu nav-menu"
          }
        >
          <li className="nav-item">
            <Link to="/client-services" className="nav-links">
              Client Service
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/faq" className="nav-links">
              FAQ
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/services" className="nav-links">
              ENG <i className="fa fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;
