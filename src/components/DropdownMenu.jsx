import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import "./dropdown.css";

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    console.log("showing menu");
    setShowMenu(true);
  };

  const handleHideMenu = () => {
    console.log("hiding menu");
    setShowMenu(false);
  };

  return (
    <div className="dropdown-menu">
      <button
        className="dropdown-button"
        onMouseEnter={handleShowMenu}
        onMouseLeave={handleHideMenu}
      >
        How it works <AiOutlineDown />
      </button>
      <Modal show={showMenu} onHide={handleHideMenu} className="menu-modal">
        <Modal.Body>
          <div className="menu-content">
            <Link to="/discover" className="menu-item">
              Discover
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DropdownMenu;
