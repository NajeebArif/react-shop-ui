import React, { Component, Fragment } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h1>Welcome to JS Thrift Website.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci erat, fermentum sed pharetra a, condimentum sodales nibh. Phasellus rhoncus viverra velit, quis tristique purus sollicitudin eu. Curabitur dictum dignissim massa, et blandit risus maximus scelerisque. Suspendisse suscipit purus sed tincidunt laoreet. Fusce suscipit laoreet ipsum, eu ornare magna imperdiet non. In mattis porta vestibulum. Pellentesque sed euismod nulla. Phasellus ut dui a odio ornare elementum. Morbi lacinia tincidunt erat, ac lacinia odio lacinia vitae. Integer hendrerit est a lacinia blandit. Donec fermentum orci id velit tincidunt lobortis. Nulla id consectetur est, a dignissim mi.
                        </p>
                    </Container>
                </Jumbotron>
            </Fragment>
        )
    }
}
