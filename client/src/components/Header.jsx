import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="shadow bg-light">
        <Container>
          <Navbar.Brand href="/">CarScope</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cars">All Cars</Nav.Link>
            <Nav.Link href="/cars/new">Add Car</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};
