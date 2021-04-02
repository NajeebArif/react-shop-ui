import React, { Component, Fragment, useState } from 'react'
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserNameChange(event) {
        this.setState({ username: event.target.value })
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value })
    }

    handleFormSubmit = event => {
        console.log("Login Button is clicked!")
        console.log("user eneterd : " + this.state.username)
    }


    render() {
        return (
            <div >
                <LoginContainer>
                    <Card className="mt-2">
                        <Card.Body>
                            <Card.Title >Please show us your Gate pass!</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted ">Or if you dont have it, then please get one.</Card.Subtitle>
                            <LoginForm
                                onSubmit={this.handleFormSubmit}
                                username={this.state.username}
                                usernameChange={this.handleUserNameChange.bind(this)}
                                password={this.state.password}
                                passwordChange={this.handlePasswordChange}
                            />
                        </Card.Body>
                    </Card>
                    
                </LoginContainer>
            </div>
        )
    }
}

const LoginContainer = styled(Container)`
    width: 40%
`

const LoginForm = props => {
    return (
        <Fragment>
            <Form onSubmit={props.onSubmit}>
                <Row>
                    <UsernameFormGroup value={props.username} onChange={props.usernameChange} />
                </Row>
                <Row>
                    <PasswordFormGroup value={props.password} onChange={props.passwordChange} />
                </Row>
                <Row>
                    <RememberMe />
                </Row>
                <Row>
                    <LoginButtomGroups />
                </Row>
            </Form>
        </Fragment>
    )
}


const UsernameFormGroup = (props) => {
    return (
        <Fragment>
            <Form.Group controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={props.value} onChange={props.onChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </Fragment>

    )
}

const PasswordFormGroup = props => {
    return (
        <Fragment>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={props.value} onChange={props.onChange} />
            </Form.Group>
        </Fragment>
    )
}

const RememberMe = props => {
    return (
        <Fragment>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Don't let me forget you!" />
            </Form.Group>
        </Fragment>
    )
}

const LoginButtomGroups = props => {
    return (
        <Fragment>
            <Col>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Col>
            <Col>
                <Link to="/registration">
                    <Button variant="secondary" >
                        Let me in!
                    </Button>
                </Link>
            </Col>
        </Fragment>
    )
}
