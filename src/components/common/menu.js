import React from 'react';
import { Link } from '@reach/router';

function Menu() {
  return (
    <nav>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/about" className="menu-item">About</Link>
    </nav>
  );
}

export default Menu;
