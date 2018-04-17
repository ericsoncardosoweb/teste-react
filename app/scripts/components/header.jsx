import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="header">
    <div className="container small">
      <nav>
        <Link to="home">Notes</Link>
      </nav>
    </div>
    </header>
  )
};

export default Header;