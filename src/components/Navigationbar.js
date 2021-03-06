import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import {  NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

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
                            <NavDropdown title="Products" id="productsDropdown" >
                                <NavDropdown.Item as={NavLink} to="/items">Items List</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/items/add">Add Item</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/items/remove">Remove Item</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="mr-2 text-light" >
                            <NavDropdown title={<FontAwesomeIcon icon={faUser}/> } id="userLoginRegistrationDropDown" alignRight={true}>
                                <NavDropdown.Item as={NavLink} to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/registration"><FontAwesomeIcon icon={faUserPlus} /> Registration</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

