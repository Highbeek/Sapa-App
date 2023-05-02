import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Love from "../assets/love.png";
import Modal from "react-bootstrap/Modal";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import LoginPage from "../pages/LoginPage";
import DropdownMenu from "../components/DropdownMenu";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDropdownModal, setShowDropdownModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleMouseEnter = (event) => {
    if (event.target.innerText === "Discover") {
      setShowDropdownModal(true);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowDropdownModal(false);
    }, 100);
  };

  return (
    <header className="header">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <ul
          className={`nav-links ${scrolled ? "scrolled" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className="links">
            <Link className="navbar__brand" to="/">
              <img src={Love} alt="" />
              saPA
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
          <li>
            <Link
              to="#"
              className="links"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Discover
              <IoMdArrowDropdown />
            </Link>
            <Modal
              show={showDropdownModal}
              onHide={() => setShowDropdownModal(false)}
              className="modal-dialog-centered"
            >
              <Modal.Header>
                <Modal.Title>Discover</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DropdownMenu />
              </Modal.Body>
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
          <AiOutlineBars className="menu__icon" />
        </ul>
      </nav>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <LoginPage onClose={handleCloseLoginModal} />
      </Modal>
    </header>
  );
};

export default Navbar;
