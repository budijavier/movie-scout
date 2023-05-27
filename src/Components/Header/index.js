import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import MovieScoutLogo from "./MovieScout.png";
import "./style.css";

const HeaderComponent = () => {
  const navData = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "TV Series", link: "/series" },
    { name: "Search", link: "/search" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container fluid>
          <NavLink to="/" className="header-logo-link">
            <img
              src={MovieScoutLogo}
              alt="MovieScout"
              className="header-logo"
            />
          </NavLink>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="header-nav" navbarScroll>
              {navData.map((item) => (
                <Nav key={item.name} className="header-nav-item">
                  <NavLink
                    to={item.link}
                    className="header-nav-link"
                    activeClassName="active"
                  >
                    <span className="header-nav-text">{item.name}</span>
                  </NavLink>
                </Nav>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
