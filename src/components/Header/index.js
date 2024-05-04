import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import './style.css';

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#logo">Traders</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link className="nav-font" href="About">About</Nav.Link>
                    <Nav.Link className="nav-font" href="Blog">Blog</Nav.Link>
                    <Nav.Link className="nav-font" href="Contact">Contact</Nav.Link>
                    <Button variant="primary">Login</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header