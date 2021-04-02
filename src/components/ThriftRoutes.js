import React from 'react'
import { Route,  Switch } from "react-router-dom";
import Home from './home/Home';
import Products from './products/Products';
import Login from './Login'
import Registration from './Registration'

export default function ThriftRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration">
                <Registration />
            </Route>
            <Route component={Home} />
        </Switch>
    )
}
