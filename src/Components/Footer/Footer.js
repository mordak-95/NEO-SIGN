import React from "react";
import "./Footer.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">NeoSign</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about-us">Link</Nav.Link>

                    </Nav>

                </Container>
            </Navbar>

        );
    }
}


export default Footer;
