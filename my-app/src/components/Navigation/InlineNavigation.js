/* Importing from react */
import React, { useState } from "react";

/*Importing from the external libraries*/
import { Link } from "react-router-dom";

/* Importing the scss file for styling */
import classes from "./InlineNavigation.module.scss";

function InlineNavigation() {
  const [click] = useState(false);
  return (
    <div>
      <div className={classes.options}>
        <ul className={click ? "nav-menu-inline active" : "nav-menu-inline"}>
          {/* Clickable titles */}
          <li className={classes.nav_item}>
            <Link to="/best-seller" className={classes.nav_links_inline}>
              Best Seller
            </Link>
          </li>

          <li className={classes.nav_item}>
            <Link to="/new-product" className={classes.nav_links_inline}>
              New Product
            </Link>
          </li>
        </ul>
      </div>
      {/* Main title */}
      <h2 className={classes.header}>All Products</h2>
    </div>
  );
}

export default InlineNavigation;
