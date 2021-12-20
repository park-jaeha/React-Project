import React from 'react';
import {Navbar, Nav, Container, Form, Button, FormControl, NavDropdown} from 'react-bootstrap';


const Navi = () => (
    <>
        <Navbar bg="dark" variant ="dark">
            <Container>
            <Navbar.Brand href = "/home">This is home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href ="/test">test</Nav.Link>
                <Nav.Link href ="/main">main</Nav.Link>
                <li>Info</li>
            </Nav>
            </Container>
        </Navbar>
        <br />
    </>
);

export default Navi;