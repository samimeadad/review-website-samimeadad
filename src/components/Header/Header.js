import React from 'react';
import { Form, FormControl, Nav, Navbar, Button, NavDropdown, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import coverImage from '../../images/cover.jpg'

const Header = () => {
    return (
        <header className="header">
            <Navbar className="p-3" bg="dark" variant="dark">
                <Navbar.Brand>
                    <NavLink to="/home" className="me-5 text-info text-decoration-none">
                        Sami's Educare
                    </NavLink>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="me-3 text-info text-decoration-none" to="/home">Home</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/courses">Courses</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/teachers">Teachers</NavLink>
                    <NavLink className="me-3 text-info text-decoration-none" to="/about">About Us</NavLink>
                </Nav>
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
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Course Here"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

            <section className='m-5'>
                <Row>
                    <Col xs={ 12 } md={ 7 }>
                        <img className="img-fluid" src={ coverImage } alt="coverImage" />
                    </Col>
                    <Col xs={ 6 } md={ 5 }>
                        <div className="mt-5 p-5 me-5 h-75 text-start">
                            <h1 className="text-dark mb-3">Sami's <span className="text-primary fw-bold">Educare</span></h1>
                            <hr />
                            <h2 className="me-3 mb-4 text-dark">Learn for <span className="text-primary fw-bold">PASSION</span>, not for <span className="text-primary fw-bold">PROFESSION</span></h2>
                            <hr />
                            <h3 className="text-dark">Your Ultimate <span className="text-primary fw-bold">E-learning</span> Journey Begins Here</h3>
                        </div>
                    </Col>
                </Row>
            </section>
        </header>
    );
};

export default Header;