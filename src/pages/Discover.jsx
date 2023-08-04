import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./discover.css";

const Discover = () => {
  const navigate = useNavigate();
  return (
    <div className="footer__container row py-5">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <Link href="#">
            <AiOutlineArrowRight />
            help
          </Link>
          <Link href="#">
            <AiOutlineArrowRight />
            FAQ
          </Link>
          <Link href="#">
            <AiOutlineArrowRight />
            billing policy
          </Link>
          <Link href="#">
            <AiOutlineArrowRight />
            privacy policy
          </Link>
        </div>
        <div className="box">
          <h3>Learn More</h3>
          <Link href="#search" className="nav-link">
            How saPA works
          </Link>
          <Link href="#search" className="nav-link">
            FAQ
          </Link>
          <Link href="#search" className="nav-link">
            Success stories
          </Link>
          <Link href="#search" className="nav-link">
            Projects
          </Link>
          <Link href="#search" className="nav-link">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
