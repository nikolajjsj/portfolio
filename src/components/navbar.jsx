import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-item">
          HOME
        </Link>
        <Link to="/contact" className="navbar-item">
          CONTACT
        </Link>
      </nav>
    </>
  );
}
