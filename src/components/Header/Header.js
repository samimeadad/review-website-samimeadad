import React from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <NavLink to="/home" className="ms-3 me-5 text-info text-decoration-none">
                    Sami's Educare
                </NavLink>
            </Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className="me-3 text-info text-decoration-none" to="/home">Home</NavLink>
                <NavLink className="me-3 text-info text-decoration-none" to="/courses">Courses</NavLink>
                <NavLink className="me-3 text-info text-decoration-none" to="/teachers">Teachers</NavLink>
                <NavLink className="me-3 text-info text-decoration-none" to="/about">About Us</NavLink>
            </Nav>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search Course Here"
                    className="me-2"
                    aria-label="Search"
                />
                <Button className="me-3" variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;