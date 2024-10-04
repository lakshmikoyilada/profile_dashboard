import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Interns</a></li>
          <li><a href="#">Volunteers</a></li>
          <li><a href="#">Mentors</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
