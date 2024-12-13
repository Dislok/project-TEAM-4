import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLinks } from "../../json/headerLinks";
import "./header.css";
import { Logo, MenuItem, MenuToggle } from "./components";
import { useTheme } from "../../context";


export const Header = () => {
  const [links, setLinks] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchLinks().then(setLinks);
  }, []);

  const handleMouseEnter = (submenu) => setActiveSubmenu(submenu);
  const handleMouseLeave = () => setActiveSubmenu(null);

  const hideMenu = () => {
    document.getElementById("navbarNav").classList.remove("show");
    setOverlay(false);
  };

  return (
    <>
      {overlay && (
        <div
          onClick={() => setOverlay(false)}
          className="overlay-menu"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        />
      )}
      
      <div id="header">
        <nav className={`navbar navbar-expand-lg navbar-light ${theme === 'dark' ? 'bg-gob-dark' : 'bg-gob'}`}>
          <div className="container-fluid">
            <Logo />
            <MenuToggle setOverlay={setOverlay} />
            <div className="collapse navbar-collapse second-navbar-gob" id="navbarNav">
              <ul
                id="menu-list"
                className="navbar-nav"
                onClick={() => {
                  setActiveSubmenu(null);
                  hideMenu();
                }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                </li>
                {links.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    activeSubmenu={activeSubmenu}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};