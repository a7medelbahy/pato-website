import LogoImg1 from "../images/icons/logo.png";
import LogoImg2 from "../images/icons/logo2.png";
import { NavbarLinksData } from "../data";
import NavlinkItem from "./NavlinkItem";
import "./mainCompnents.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [fixedNav, setFixedNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  });
  return (
    <nav
      className={
        fixedNav
          ? "navbar py-2 navbar-expand-lg fixed-top fixed-nav"
          : "navbar py-3 navbar-expand-lg fixed-top"
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="img-fluid"
            src={fixedNav ? LogoImg2 : LogoImg1}
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {NavbarLinksData.map((navlinkItem) => {
              return (
                <NavlinkItem key={navlinkItem.id} navlinkItem={navlinkItem} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
