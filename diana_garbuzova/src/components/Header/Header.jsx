import './Header.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div className='container header__container'>
      <Link
        className='header__link header__link_main'
        to='/page/1'
      >Pokedex
      </Link>
      <NavLink
        className='header__link header__link_sub'
        activeClassName='header__link_active'
        to='/pokemons/catched'
      >Catched
      </NavLink>
    </div>
  </header>
);

export default Header;
