import React from "react";
import "./Header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Navbar className="mt-4" sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">NeoSign</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="about-us">About Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}


export default Header;
