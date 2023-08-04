import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer__container row py-5">
      <div className="box-container">
        <div className="box">
          <h3>End saPA For</h3>
          <Link href="#search">
            {" "}
            <AiOutlineArrowRight /> Medical
          </Link>
          <Link href="#search">
            {" "}
            <AiOutlineArrowRight /> Emergency
          </Link>
          <Link href="#search">
            {" "}
            <AiOutlineArrowRight /> Accomadation
          </Link>
          <Link href="#search">
            {" "}
            <AiOutlineArrowRight /> Education
          </Link>
          <Link href="#search">
            {" "}
            <AiOutlineArrowRight /> Projects
          </Link>
        </div>
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
        <div className="box">
          <h3>Contact</h3>
          <Link href="#">
            <FaPhoneAlt />
            +234-123-5678
          </Link>
          <Link href="#">
            <FaPhoneAlt />
            +234-123-8765
          </Link>
          <Link href="#">
            <FaEnvelope />
            info@saPa.com
          </Link>
          <Link href="#">
            <FaMapMarkerAlt />
            lagos, Nigeria
          </Link>
        </div>
      </div>
      <div className="socials">
        <BsFacebook className="social__links" />
        <BsInstagram className="social__links" />
        <BsLinkedin className="social__links" />
        <BsTwitter className="social__links" />
      </div>
      <div className="bottom">
        &copy; designed by Highbeek | all rights reserved
      </div>
    </div>
  );
};

export default Footer;
