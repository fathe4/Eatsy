import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header_in clearfix ">
      <div className="container">
        <div id="logo">
          <a href="/">
            <img
              src="http://www.ansonika.com/fooyes/img/logo_sticky.svg"
              width="162"
              height="35"
              alt=""
            />
          </a>
        </div>
        <div className={`layer ${toggle ? "layer-is-visible" : ""}`}></div>
        <ul id="top_menu">
          <li>
            <a href="#sign-in-dialog" id="sign-in" className="login">
              Sign In
            </a>
          </li>
          <li>
            <a href="#0" className="wishlist_bt_top" title="Your wishlist">
              Your wishlist
            </a>
          </li>
        </ul>

        <a href="#0" className="open_close" onClick={() => setToggle(!toggle)}>
          <i className="icon_menu"></i>
          <span>Menu</span>
        </a>
        <nav className={`main-menu ${toggle ? "show" : ""}`}>
          <div id="header_menu">
            <a
              onClick={() => setToggle(!toggle)}
              href="#0"
              className="open_close"
            >
              <i className="icon_close"></i>
              <span>Menu</span>
            </a>
            <a href="index.html">
              <img
                src="http://www.ansonika.com/fooyes/img/logo.svg"
                width="162"
                height="35"
                alt=""
              />
            </a>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurants">Listing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
