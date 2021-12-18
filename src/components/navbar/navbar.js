// import components
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// import styling
import "./navbar.scss";

// navbar component
function Navbar() {
  const overlayDropRef = useRef(0);
  const [overlayActive, setOverlayActive] = useState(false);

  const onClickOpenOverlay = () => {
    let body = document.querySelector("body");
    setOverlayActive(!overlayActive);
    if (!overlayActive) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__brandLink">
          Olivia Williams
        </NavLink>
      </div>
      <div className="navbar__navLg noSm">
        <span className="navbar__navItem">
          <NavLink to="/work" className="navbar__navLink">
            WORK
          </NavLink>
        </span>
        <span className="navbar__navItem">
          <NavLink to="/about" className="navbar__navLink">
            ABOUT
          </NavLink>
        </span>
        <span className="navbar__navItem">
          <NavLink to="/contact" className="navbar__navLink">
            CONTACT
          </NavLink>
        </span>
      </div>

      {/* small devices */}
      <div
        className="navbar__menu navbar__menu--mod noLg"
        onClick={onClickOpenOverlay}
      >
        {overlayActive ? "CLOSE" : "MENU"}
      </div>
      <div
        className={`${
          overlayActive ? "navbar__overlay" : "navbar__overlayInactive"
        } noLg`}
        ref={overlayDropRef}
      >
        <div className="navbar__navSm noLg">
          <div className="navbar__navSmItem">
            <NavLink to="/work" className="navbar__navSmLink">
              WORK
            </NavLink>
          </div>
          <div className="navbar__navSmItem">
            <NavLink to="/about" className="navbar__navSmLink">
              ABOUT
            </NavLink>
          </div>
          <div className="navbar__navSmItem">
            <NavLink to="/contact" className="navbar__navSmLink">
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// export component
export default Navbar;
