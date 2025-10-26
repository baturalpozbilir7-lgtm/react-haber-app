import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <h1 className="text-white mb-0" style={{ fontWeight: 800 }}>
              HABER SİTESİ
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg" className="shadow-sm mb-4 border-bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="fw-bold text-dark">
                ANA SAYFA
              </Nav.Link>

              <Nav.Link href="#gundem" className="text-dark">
                GÜNDEM
              </Nav.Link>
              <Nav.Link href="#politika" className="text-dark">
                POLİTİKA
              </Nav.Link>
              <Nav.Link href="#spor" className="text-dark">
                SPOR
              </Nav.Link>
              <Nav.Link href="" className="text-dark">
                EKONOMİ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
