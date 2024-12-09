import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { links } from '../json/headerLinks';

export const NavBarComponent = ({ style }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={style}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((item, index) => (
              item.submenu ? (
                <NavDropdown 
                  title={item.nombre} 
                  id={`dropdown-${index}`} 
                  key={index}
                  className="mx-2"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <NavDropdown.Item 
                      as={Link} 
                      to={subItem.subMenuUrl} 
                      key={subIndex}
                      className="submenu-item"
                    >
                      {subItem.subMenuNombre}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link 
                  as={Link} 
                  to={item.link} 
                  key={index}
                  className="mx-2"
                >
                  {item.nombre}
                </Nav.Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};