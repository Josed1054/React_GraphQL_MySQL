import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <h2>⚛</h2>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Personas">Personas</NavLink>
        <NavLink to="AboutUs">About Us</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
