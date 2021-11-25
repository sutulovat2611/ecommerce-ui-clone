import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
/* Importing the scss file for styling */
import './Dropdown.scss';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
                <div>
                {item.title}
                </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;