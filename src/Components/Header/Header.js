import React from "react";
import "./Header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        let { path } = this.props;
        
        let selectedItem = {
            home: "",
            aboutUs: ""
        };

        switch (path) {
            case "/":
                selectedItem.home = " selected-item";
                break;
            case "/about-us":
                selectedItem.aboutUs = " selected-item"
                break;

        }
        
        return (
                <Navbar className="mt-4" sticky="top" expand="lg">
                    <Container>
                        <Link className="light-color title-font-size bold-font hover-primary py-2 px-3 me-5 text-decoration-none" to="/">Neo Sign</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-5 ">
                                <Link className={"ms-3 me-5 mt-4 nav-item text-decoration-none" + selectedItem.home} to="/">Home</Link>
                                <Link className={"ms-3 me-5 mt-4 nav-item text-decoration-none" + selectedItem.aboutUs} to="about-us">About Us</Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        );
    }
}


export default Header;
