import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'


export default class Navigationbar extends Component {
    render() {
        return (
            <div id="jsThriftNavbar">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand as={NavLink} to="/">JS-Thrift</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto text-light">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        </Nav>
                        <Nav className="mr-2 text-light">
                            <Nav.Link as={NavLink} to="/login">
                                <i class="fas fa-user-tie"></i>
                            </Nav.Link>
                        </Nav>

                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

