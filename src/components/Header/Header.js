import React from 'react';
import { Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

// component for header and navbar
const Header = () => {
    return (
        <header className="header">
            <Navbar className="p-3" bg="dark" variant="dark">
                {/* Brand text */ }
                <Navbar.Brand>
                    <NavLink to="/home" className="me-5 text-info text-decoration-none">
                        Sami's Educare
                    </NavLink>
                </Navbar.Brand>

                {/* menu bar and primary route button */ }
                <Nav className="me-auto">
                    <NavLink className="me-3 text-info text-decoration-none" to="/home">Home</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/courses">Courses</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/teachers">Instructors</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/about">About Us</NavLink>
                </Nav>

                {/* cart icon from react fontawesome */ }
                <span className="text-info me-2"><FontAwesomeIcon icon={ faCartPlus } /></span>

                {/* dropdown category menu */ }
                <Nav className="me-3 text-info text-decoration-none">
                    <NavDropdown title={ <span className="text-info">Category</span> } id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Development</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">IT & Software</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.5">Premium Courses</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                {/* search input and search button */ }
                <Form className="d-flex me-5">
                    <FormControl
                        type="search"
                        placeholder="Search Course Here"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>

                {/* login and signup section */ }
                <Nav className="p-3">
                    <Button variant="outline-info" className="me-3">Join for Free</Button>
                    <NavLink className="mt-1 text-info text-decoration-none" to="/login">Login</NavLink>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;