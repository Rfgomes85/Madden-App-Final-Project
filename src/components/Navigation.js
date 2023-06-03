import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* The navigation component */}
      <ul className="nav-links">
        {/* The unordered list containing navigation links */}
        <li>
          <NavLink exact="true" to="/" className="tab-link" activeClassName="active-tab">
            Home
          </NavLink>
          {/* The navigation link for the Home page */}
        </li>
        <li>
          <NavLink exact="true" to="/videos" className="tab-link" activeClassName="active-tab">
            Videos
          </NavLink>
          {/* The navigation link for the Videos page */}
        </li>
        <li>
          <NavLink exact="true" to="/reviews" className="tab-link" activeClassName="active-tab">
            Reviews
          </NavLink>
          {/* The navigation link for the Reviews page */}
        </li>
        <li>
          <NavLink exact="true" to="/contact" className="tab-link" activeClassName="active-tab">
            Contact
          </NavLink>
          {/* The navigation link for the Contact page */}
        </li>
        <li>
          <NavLink exact="true" to="/signup" className="tab-link" activeClassName="active-tab">
            Signup
          </NavLink>
          {/* The navigation link for the Signup page */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
