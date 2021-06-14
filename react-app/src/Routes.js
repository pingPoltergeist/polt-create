import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/core/Home'
import NotFound from "./components/core/NotFound";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes