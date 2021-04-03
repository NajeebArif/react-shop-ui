import React, { Component, Fragment } from 'react'
import { Route, Switch, useRouteMatch, useParams } from 'react-router'
import AddItem from './AddItem'
import ItemsList from './ItemsList'
import RemoveItem from './RemoveItem'


export default function Items() {
    let {path, url} = useRouteMatch();
    return (
        <Fragment>
                <Switch>
                    <Route path={`${path}/add`}>
                        <AddItem />
                    </Route>
                    <Route path={`${path}/remove`}>
                        <RemoveItem />
                    </Route>
                    <Route exact path={path}>
                        <ItemsList/>
                    </Route>
                </Switch>
            </Fragment>
    )
}

