import react from "react";
import { Navbar, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import happybrain from "../images/happybrain.png"

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <NavbarBrand className="brand" href="/">
        <img id="brain" src={happybrain}width="40" height="40" class="d-inline-block align-top" alt=""/>
    I Can ADHD 
      </NavbarBrand>
      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="about">About ADHD</NavLink>
        <NavLink href="mental-health">Brain Dump</NavLink>
        <NavLink href="legal">Future Tasks</NavLink>
      </Nav>
    </Navbar>
  );
}

{/*  return (
//   <div>
//     <li>
//       <p to="/">MMDDYYYY</p>
//     </li>
//     {/* <li>
//       <Link to="/cats">Cats</Link>
//     </li>
//     <li>
//       <Link to="/sheeps">Sheeps</Link>
//     </li>
//     <li>
//       <Link to="/goats">Goats</Link>
//     </li> */}
//   </div> 
//  );  */}

export default NavBar;
