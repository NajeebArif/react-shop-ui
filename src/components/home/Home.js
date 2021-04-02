import React, { Component } from 'react'
import Welcome from './Welcome'
import ProductsCoursel from './ProductsCoursel'

export default class Home extends Component {
    render() {
        return (
            <div id="homeContent">
                <div id="welcomeMsg">
                    <Welcome />
                    <ProductsCoursel />
                </div>
            </div>
        )
    }
}
