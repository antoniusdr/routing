import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/about">
        About
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/discover">
        Discover
      </NavLink>
    </div>
  );
};

export default NavBar;
