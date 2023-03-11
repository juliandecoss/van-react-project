import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">#VANLIFE</h1>
      <div className="nav-routes">
        <Link to="/" className="nav-home">
          Home
        </Link>
        <Link to="/about" className="nav-about">
          About
        </Link>
      </div>
    </nav>
  );
}
