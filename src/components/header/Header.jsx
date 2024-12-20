import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import { Logo, MenuItem, MenuToggle } from "./components";
import { useTheme } from "../../context";
import { useMenuStore } from "../../hooks";

export const Header = () => {
  const { datos } = useMenuStore();
  const [overlay, setOverlay] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { theme } = useTheme();

  const handleMouseEnter = (submenu) => setActiveSubmenu(submenu);
  const handleMouseLeave = () => setActiveSubmenu(null);

  const hideMenu = () => {
    setOverlay(false);
  };

  const isDataReady = datos && datos.length > 0;

  return (
    <>
      {overlay && (
        <div
          onClick={() => setOverlay(false)}
          className="overlay-menu"
        />
      )}

      <Navbar 
        expand="lg" 
        className={`${theme === "dark" ? "bg-gob-dark" : "bg-gob"}`}
        id="header"
      >
        <Container fluid>
          <Logo />
          <MenuToggle setOverlay={setOverlay} />
          <Navbar.Collapse id="navbarNav" className="second-navbar-gob">
            <Nav 
              id="menu-list" 
              onClick={() => {
                setActiveSubmenu(null);
                hideMenu();
              }}
            >
              <Nav.Item>
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              </Nav.Item>
              {isDataReady ? (
                datos[0].map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    activeSubmenu={activeSubmenu}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))
              ) : (
                <Nav.Item>
                  <Nav.Link>Cargando...</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};