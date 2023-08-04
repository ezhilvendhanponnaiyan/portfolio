import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1 className="logo">
            De<span>ve</span>lo<span>per</span>
          </h1>
        </div>
        <div className="navbar">
          <nav className="navbar-container">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-items"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-items"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-items"
            >
              Project
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-items"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
