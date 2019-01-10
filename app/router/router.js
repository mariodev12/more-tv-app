import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../components/Home'
import Settings from '../components/Settings'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/settings" exact component={Settings} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);