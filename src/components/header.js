import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <Link to="/" className="logo-link">
//           <svg className="svg-logo" width="55" height="30">
//             <path d="M 0 30 L 15 0 L 30 30 Z" fill="#0084ff"></path>
//             <path d="M 15 30 L 30 0 L 45 30 Z" fill="#000000"></path>
//           </svg>
//         </Link>
import { useScroll, useTransform, motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
  return (
    <header data-module="header" className="">
      <div className="container">
        <div className="close-menu">
          <div className="navigation">
            <div className="logo">
            <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.75, ...transition },
                  }}>
              <Link to={"/"}>
                <svg className="svg-logo" width="55" height="30">
                  <path d="M 0 30 L 15 0 L 30 30 Z" fill="#0084ff"></path>
                  <path d="M 15 30 L 30 0 L 45 30 Z" fill="#000000"></path>
                </svg>
              </Link>
              </motion.div>
            </div>
            <div id="threeLines" className="">
              <button id="el"></button>
            </div>
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li className="fade-in">
              <a href="#app">Top</a>{" "}
            </li>
            <li className="fade-in">
              <a href="#p0">About</a>{" "}
            </li>
            <li className="fade-in">
              <a href="#p1">Skills</a>{" "}
            </li>
            <li className="fade-in">
              <a href="#p2">Work Experience</a>
            </li>
            <li className="fade-in">
              <a href="#p3">Freelance Work</a>
            </li>
            <li className="fade-in">
              <a href="#p4">Education</a>
            </li>
            <li className="fade-in">
              <a href="#p5">Connect</a>
            </li>
          </ul>
        </nav>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
