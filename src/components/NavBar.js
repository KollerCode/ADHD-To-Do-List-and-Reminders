import react from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import happybrain from "../images/happybrain.png"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <NavbarBrand className="brand" href="/">
        <img id="brain" src={happybrain}width="100" height="100" class="d-inline-block align-top" alt=""/>
    I Can ADHD 
      </NavbarBrand>
      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-adhd">About ADHD</NavLink>
        <NavLink to="braindump">Brain Dump</NavLink>
        <NavLink to="future-tasks">Future Tasks</NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
