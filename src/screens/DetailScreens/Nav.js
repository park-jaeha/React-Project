import React from 'react';
import {Navbar, Nav, Container, Form, Button, FormControl, NavDropdown} from 'react-bootstrap';

const Navi = () => (
    <>
        <Navbar bg="dark" variant ="dark">
        <Navbar.Brand href = "/home" style ={{marginLeft:15}}>JH's Test</Navbar.Brand>
            {/* <Container> */}
            <Nav className="me-auto">
                <Nav.Link href ="jh-blogtest.netlify.app/main">main</Nav.Link>
                <Nav.Link href ="/test">test</Nav.Link>
                <NavDropdown title="Info" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/1">test1</NavDropdown.Item>
                    <NavDropdown.Item href="/2">test2</NavDropdown.Item>
                    <NavDropdown.Item href="/3">test3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* </Container> */}
        </Navbar>
        <br />
    </>
);
export default Navi;