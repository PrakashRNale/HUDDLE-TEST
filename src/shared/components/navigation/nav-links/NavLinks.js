import React from "react";
import { Link } from "react-router-dom";

import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">All Posts</Link>
      </li>
      <li>
        <Link to="/users">All Users</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
