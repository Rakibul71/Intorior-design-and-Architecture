import React from "react";
import "./NavBar.css";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/logo.png";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="boot">
          <img src={logo} alt="logo" height="20" width="100px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/home"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/architecher"}>
              Architecher
            </Nav.Link>
            {/* Relatiable part start here */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Relatiable
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={"/intorior"}>
                  Intorior
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/graphic"}>
                  Graphic
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/sdvisulization"}>
                  Sd Visulization
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <NavDropdown title="learn" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/blog"}>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/academic"}>
                Academic
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/course"}>
                Course
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to={"/crew"}>
              Crew
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
