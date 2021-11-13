import { Link } from 'react-router-dom';

import classes from './SearchNavigation.module.css';

import { BsHeart, BsPerson } from 'react-icons/bs';

function SearchNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Man's</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Woman's</Link>
          </li>
          <li>
            <Link to='/favorites'><BsHeart /></Link>
          </li>
          {/* later on will be a dropdown list */}
          <li>
            <Link to='/favorites'><BsPerson /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default SearchNavigation;