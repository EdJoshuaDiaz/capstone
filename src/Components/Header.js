import React from "react";
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header(props) {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
      <header className="container-row">
        <div className="container-column">
          <nav>
            <Link className="logo" to="/">
              <img src={Logo} alt="Little Lemon" width={300} />
            </Link>
            <menu ref={navRef}>
              <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes className="fa-lg" />
              </button>

              {props.menuNav.map((list) => {
                return (
                  <li onClick={hideNavbar}>
                    <NavLink to={list.pageURL}>{list.pageName}</NavLink>
                  </li>
                );
              })}
            </menu>
            <button className="nav-btn" onClick={showNavBar}>
              <FaBars className="fa-xl" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
