import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from "../images/logo PKD.png";
import { FaBars } from "react-icons/fa";


const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleProgram = () => {
    setListOpen(!listOpen);
  };

  return (
    <>
      <nav className="mainNav">
        <div className="navContainer">
          <div className="logo">
            <img src={logo} alt="logo.." />
          </div>
          <div className={`nav-Items ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a onClick={toggleProgram} href="#!">
                  Programs
                </a>
                <div className={`program-list ${listOpen ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/programs/program1">6th-8th Std Student</Link>
                    </li>
                    <li>
                      <Link to="/programs/program2">9th-10th Std Student</Link>
                    </li>
                    <li>
                      <Link to="/programs/program3">
                      11th-12th Std Student
                      </Link>
                    </li>
                    <li>
                      <Link to="/programs/program4">
                        Graduate
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/programs/enneagram">Enneagram Test</Link>
                    </li>
                    <li>
                      <Link to="/programs/caliper">Caliper</Link>
                    </li>
                    <li>
                      <Link to="/programs/minnesota">
                        Minnesota Multiphasic Personality Inventory
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <button className="booking-btn">Book session</button>
            </ul>
          </div>
          <div className="menubtn" onClick={toggleMenu}>
            <FaBars size={40} />
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavigationBar;
