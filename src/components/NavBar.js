import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
    <Navbar.Brand>TASKMASTER</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link>
                <i className="fas fa-home"></i> Home
            </Nav.Link>
            <Nav.Link>
                <i className="fas fa-sign-in-alt"></i> Login
            </Nav.Link>
            <Nav.Link>
                <i className="fas fa-user-plus"></i> Sign Up
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBar