import React from "react";
import "./Footer.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Nav>

                </Container>
            </Navbar>

        );
    }
}


export default Footer;
