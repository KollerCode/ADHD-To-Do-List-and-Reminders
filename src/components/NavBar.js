import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import happybrain from "../images/happybrain.png"

function NavBar() {
  return (
    <div className="App">
      <Navbar className="nav-bar" style={{ minWidth: 700 }}>
        <img id="brain" src={happybrain}></img>
        <Navbar.Brand className="brand" href="/">
          ICanADHD
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{ marginLeft: "auto", paddingRight: 40 }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="mental-health">Mental Health</Nav.Link>
          <Nav.Link href="legal">Legal Services</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

// return (
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
// );

export default NavBar;
