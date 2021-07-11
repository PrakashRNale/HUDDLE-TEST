import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "../main-header/main-header";
import NavLinks from "../nav-links/NavLinks";

import "./MainNavigation.scss";

const MainNavigation = () => {
  return (
    <MainHeader>
      <Link to="/">
        <h2>Huddle.AI</h2>
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
