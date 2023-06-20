/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <a href="https://www.facebook.com">
        <FaFacebook className="navbar-icon" />
      </a>
      <a href="https://www.instagram.com">
        <FaInstagram className="navbar-icon" />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter className="navbar-icon" />
      </a>
    </div>
    <div className="navbar-right">
      <ul className="navbar-menu">
        <li>
          <a href="#" className="navbar-menu-item">NEWS |</a>
        </li>
        <li>
        <Link to='/events' className="navbar-menu-item">EVENTS |</Link>
        </li>
        <li>
          <a href="#" className="navbar-menu-item">INVEST |</a>
        </li>
        <li>
        <Link to='/signup' className="navbar-menu-item">SIGNUP |</Link>
        </li>
        <li>
          <a href="#" className="navbar-menu-item">JOIN BETA |</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
