import React from "react";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <header className="navbar">
      <a href="home.html">
        <h1>DB's Store | Ceramics</h1>
      </a>
      <nav className="nav">
        <ul>
          <NavItem url="home.html" label="Work" />
          <NavItem url="shop.html" label="Shop" />
          <NavItem url="contactus.html" label="Contact Us" />
        </ul>
      </nav>
    </header>
  );
}
