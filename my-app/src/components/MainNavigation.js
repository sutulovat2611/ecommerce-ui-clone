import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import Dropdown from "./Dropdown";
import "./Navigation/Navigation.css"

function MainNavigation() {
  const [click, setClick] = useState(false);
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
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <Link to="/about" className="nav-links" >
            About
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
            >
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
