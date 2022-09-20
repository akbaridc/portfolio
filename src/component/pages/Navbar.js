import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience/Experience";
import Project from "./Project";
import Contact from "./Contact";

import { navlist } from "../datas/NavList";
// import { useState } from "react";

function Navbar() {
  // const [active, setActive] = useState("/");
  const location = useLocation();

  return (
    <div>
      <div className="relative z-[999]">
        <div className="nav-menu">
          <ul className="flex mx-auto gap-1">
            {navlist.map((item, index) => (
              <Link
                to={item.route}
                key={index}
                className={
                  item.route === location.pathname
                    ? "nav-menu-item menu-active"
                    : "nav-menu-item"
                }
              >
                {item.icon}
              </Link>
            ))}
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
