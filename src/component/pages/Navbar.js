import { BsPerson, BsBook, BsFile, BsTelephone } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience/Experience";
import Project from "./Project";
import Contact from "./Contact";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("/");

  return (
    <div>
      <div className="relative z-[999]">
        <div className="nav-menu">
          <ul className="flex mx-auto gap-1">
            <Link
              to="/"
              className={
                active === "/" ? "nav-menu-item menu-active" : "nav-menu-item"
              }
              onClick={() => setActive("/")}
            >
              <GoHome />
            </Link>

            <Link
              to="/about"
              className={
                active === "/about"
                  ? "nav-menu-item menu-active"
                  : "nav-menu-item"
              }
              onClick={() => setActive("/about")}
            >
              <BsPerson />
            </Link>

            <Link
              to="/experience"
              className={
                active === "/experience"
                  ? "nav-menu-item menu-active"
                  : "nav-menu-item"
              }
              onClick={() => setActive("/experience")}
            >
              <BsBook />
            </Link>

            <Link
              to="/project"
              className={
                active === "/project"
                  ? "nav-menu-item menu-active"
                  : "nav-menu-item"
              }
              onClick={() => setActive("/project")}
            >
              <BsFile />
            </Link>

            <Link
              to="/contact"
              className={
                active === "/contact"
                  ? "nav-menu-item menu-active"
                  : "nav-menu-item"
              }
              onClick={() => setActive("/contact")}
            >
              <BsTelephone />
            </Link>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default Navbar;
