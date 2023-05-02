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



        //    <Link to="/" className="menu-item">
        //       Fundraisers
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       GoFundMe Heroes
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Success stories
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Essentials Fund
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Celebrate Black Joy
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Crisis Relief
        //     </Link>
        //     <div className="menu-divider" />
        //     <Link to="/" className="menu-item">
        //       Fundraise for
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Medical
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Memorial
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Emergency
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Nonprofit
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Education
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       See all
        //     </Link>
        //     <div className="menu-divider" />
        //     <Link to="/" className="menu-item">
        //       How GoFundMe Works
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       What is crowdfunding?
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Team fundraising
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       The Donate Button
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Pricing
        //     </Link>
        //     <div className="menu-divider" />
        //     <Link to="/" className="menu-item">
        //       Fundraising tips
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Fundraising ideas
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Help center
        //     </Link>
        //     <Link to="/" className="menu-item">
        //       Blog
        //     </Link>