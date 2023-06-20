import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import Div from "../Div";
import DropDown from "./DropDown";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const width = 100 - scrollPosition * 0.1; // Decrease width by 0.2px per scroll position
      const height = 100 - scrollPosition * 0.1; // Decrease height by 0.2px per scroll position

      // Limit the minimum size to prevent the image from becoming too small
      const newWidth = Math.max(width, 50);
      const newHeight = Math.max(height, 50);

      setDimensions({ width: newWidth, height: newHeight });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   
  
  
  const isSmallScreen = window.innerWidth <= 1024;
 
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsSticky(true);
  //     setAnimateLogo(true);
  //   } else {
  //     setIsSticky(false);
  //     setAnimateLogo(false);
  //   }
  // };

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setAnimateLogo(true);

      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        setAnimateLogo(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="talent"
                        onClick={() => setMobileToggle(false)}
                      >
                        Talent
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="about-competition"
                              onClick={() => setMobileToggle(false)}
                            >
                              About Competition
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="jury-mentor"
                              onClick={() => setMobileToggle(false)}
                            >
                              Jury & Mentor
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="prizes-winners"
                              onClick={() => setMobileToggle(false)}
                            >
                              Prizes & Winners
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="rules"
                              onClick={() => setMobileToggle(false)}
                            >
                              Rules & Criteria
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="talent-board"
                              onClick={() => setMobileToggle(false)}
                            >
                              Talent Board
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="events"
                        onClick={() => setMobileToggle(false)}
                      >
                        Events
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="events"
                              onClick={() => setMobileToggle(false)}
                            >
                              Events
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/events/events-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    {!isSmallScreen && ( 
                    <Div
                      className={`cs-main_header_left ${
                        animateLogo ? "img-animating" : ""
                      }`}
                    >
      
      <img
      src="/gemlogo.png"
      alt="Logo"
      className="cs-site_branding"
      style={{ width: dimensions.width, height: dimensions.height }}
    />
     
                    </Div>
                  )}
                    <li className="menu-item-has-children">
                      <NavLink to="news" onClick={() => setMobileToggle(false)}>
                        News
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="news"
                              onClick={() => setMobileToggle(false)}
                            >
                              Latest
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="news/news-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              News Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <NavLink
                        to="find-talent"
                        onClick={() => setMobileToggle(false)}
                      >
                        Find Talent
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="login"
                        onClick={() => setMobileToggle(false)}
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>
    </>
  );
}