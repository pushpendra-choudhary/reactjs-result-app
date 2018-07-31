import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./index.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Student Result</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/admissionForm">
            Admission Form
          </NavItem>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
