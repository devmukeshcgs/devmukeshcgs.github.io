import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header data-module="header" className="">
      <div className="container">
        <div className="close-menu">
          <div className="navigation">
            <div className="logo">
              <Link to={"/"}>
                <svg className="svg-logo" width="55" height="30">
                  <path d="M 0 30 L 15 0 L 30 30 Z" fill="#0084ff"></path>
                  <path d="M 15 30 L 30 0 L 45 30 Z" fill="#000000"></path>
                </svg>
              </Link>
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
      {/* // <header>
    //   <div className="container">
    //     <div className="row space-between">
    //       <div className="logo">
    //         <Link to="/">JIMMY FERMIN</Link>
    //       </div>
    //       <div className="menu">MENU</div>
    //     </div>
    //   </div>
    // </header> */}
    </header>
  );
};

export default Header;
