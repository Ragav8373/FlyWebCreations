// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../Assets/Flywebcreations.png";
// import './Navbar.css';

// export default function NewNavbar() {
//   return (
//     <Navbar expand="lg" className="navbar-bg shadow-sm py-2">
//       <Container>

//         {/* Logo */}
//         <Navbar.Brand as={Link} to="/">
//           <img 
//             src={logo}
//             alt="FlyWebCreations Logo"
//             className="logo-size"
//           />
//         </Navbar.Brand>

//         {/* Toggle Button */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Menu */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto align-items-center">

//             <Nav.Link as={Link} to="/" className="nav-custom">
//               Home
//             </Nav.Link>

//             <Nav.Link as={Link} to="/aboutus" className="nav-custom">
//               About Us
//             </Nav.Link>

//             <Nav.Link as={Link} to="/ourservices" className="nav-custom">
//               Our Services
//             </Nav.Link>

//             <Nav.Link as={Link} to="/career" className="nav-custom">
//               Career
//             </Nav.Link>

//             <Nav.Link as={Link} to="/contact" className="contact-btn">
//               Contact Us
//             </Nav.Link>

//           </Nav>
//         </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// }



import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Flywebcreations.png";
import "./Navbar.css";

export default function NewNavbar() {

  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-bg shadow-sm py-2"
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <img
            src={logo}
            alt="FlyWebCreations Logo"
            className="logo-size"
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Nav.Link
              as={Link}
              to="/"
              className="nav-custom"
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/aboutus"
              className="nav-custom"
              onClick={closeNavbar}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/ourservices"
              className="nav-custom"
              onClick={closeNavbar}
            >
              Our Services
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/career"
              className="nav-custom"
              onClick={closeNavbar}
            >
              Career
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className="contact-btn"
              onClick={closeNavbar}
            >
              Contact Us
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
