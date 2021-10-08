import React from "react";
import "./Header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
                <Navbar className="mt-4" sticky="top" expand="lg">
                    <Container>
                        <Link className="light-color title-font-size bold-font hover-primary py-2 px-3 me-5 text-decoration-none" to="/">Neo Sign</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="light-color menu-font-size mt-2 hover-primary text-decoration-none mx-3" to="/">Home</Link>
                                <Link className="light-color menu-font-size mt-2 hover-primary text-decoration-none mx-3" to="about-us">About Us</Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        );
    }
}


export default Header;
