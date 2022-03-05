import react from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import happybrain from "../images/happybrain.png"

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <NavbarBrand className="brand" href="/">
        <img id="brain" src={happybrain}width="40" height="40" class="d-inline-block align-top" alt=""/>
    I Can ADHD 
      </NavbarBrand>

      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About ADHD</Nav.Link>
        <Nav.Link href="mental-health">Brain Dump</Nav.Link>
        <Nav.Link href="legal">Future Tasks</Nav.Link>
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
