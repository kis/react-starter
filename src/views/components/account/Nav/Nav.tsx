import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/styles/nav.css';

const Nav = () => (
  <nav className="menubar">
    <ul className="menu">
      <li>
        <a>ALL MY SONS | MOVING & STORAGE</a>
      </li>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/packs">PACKS</Link>
      </li>
      <li>
        <a>CALL US</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
