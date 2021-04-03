import React from 'react'
import { Route,  Switch } from "react-router-dom";
import Home from './home/Home';
import ItemsList from './Items/ItemsList';
import Login from './Login'
import Registration from './Registration'
import AddItem from './Items/AddItem'
import Items from './Items/Items';

export default function ThriftRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/items" component={Items} />
                
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration">
                <Registration />
            </Route>
            <Route component={Home} />
        </Switch>
    )
}
