// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Love from "../assets/love.png";
import Modal from "react-bootstrap/Modal";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import LoginPage from "../pages/LoginPage";
import DropdownMenu from "../components/DropdownMenu";
import { IoMdArrowDropdown } from "react-icons/io";
import Discover from "../pages/Discover";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDropdownModal, setShowDropdownModal] = useState(false);
  const [showSideModal, setShowSideModal] = useState(false);
  const [showDiscoverModal, setShowDiscoverModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const toggleDropdownModal = () => setShowDropdownModal(!showDropdownModal);

  const toggleSideModal = () => setShowSideModal(!showSideModal);

  const toggleDiscoverModal = () => {
    setShowDiscoverModal(!showDiscoverModal);
  };

  return (
    <header className={`header ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className={`navbar ${scrolled ? "" : "navbar-margin"}`}>
        <ul
          className={`nav-links ${scrolled ? "scrolled" : ""} ${
            showSideModal ? "hidden" : ""
          }`}
          onMouseLeave={() =>
            setTimeout(() => setShowDropdownModal(false), 100)
          }
        >
          <li className="links">
            <Link className="navbar__brand" to="/">
              <img src={logo} alt="" style={{ width: "200px", color:"green" }} />
            </Link>
          </li>
          <li>
            <div className="navbar__search">
              <form className="navbar__search__form">
                <div className="navbar__search__input-container">
                  <input
                    type="text"
                    name="search"
                    className="navbar__search__input"
                  />
                </div>
                <button type="submit" className="navbar__search__button">
                  Search
                </button>
              </form>
            </div>
          </li>
          <li className="links">
            <div
              onClick={toggleDiscoverModal}
              style={{
                cursor: "pointer",
                color: "#002d13",
                fontSize: "1.5rem",
              }}
            >
              Discover
              <IoMdArrowDropdown />
            </div>
            <Modal
              show={showDiscoverModal}
              onHide={toggleDiscoverModal}
              centered
              size="lg"
            >
              <Discover />
            </Modal>
          </li>
          <li className="links">
            <Link to="/howitworks">How It Works</Link>
          </li>
          <li className="btn">
            <button className="openModalLink" onClick={handleOpenLoginModal}>
              SignIn
            </button>
          </li>
          <div className="menu__icon">
            <AiOutlineBars onClick={toggleSideModal} />
          </div>
        </ul>
      </nav>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <LoginPage onClose={handleCloseLoginModal} />
      </Modal>
    </header>
  );
};

export default Navbar;
