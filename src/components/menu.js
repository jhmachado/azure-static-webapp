import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <nav className={'menu'}>
    <ul className={'menu__list'}>
      <li className={'menu__list-item'}>
        <Link
          to={'/'}
          className={'menu__list-item-link'}
          activeClassName={'menu__list-item-link--active'}
        >
          Articles
        </Link>
      </li>
      <li className={'menu__list-item'}>
        <Link
          to={'/'}
          className={'menu__list-item-link'}
          activeClassName={'menu__list-item-link--active'}
        >
          About me
        </Link>
      </li>
      <li className={'menu__list-item'}>
        <Link
          to={'/'}
          className={'menu__list-item-link'}
          activeClassName={'menu__list-item-link--active'}
        >
          Contact me
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
