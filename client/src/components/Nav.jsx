import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link to="/" className="navLink">
            Accueil
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/team" className="navLink">
            Equipage
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/heroes" className="navLink">
            Héros
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/inventory" className="navLink">
            Inventaire
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;