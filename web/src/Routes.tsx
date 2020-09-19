import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home'
import Records from './pages/Records'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/records" component={Records} />
        </Switch>
    </BrowserRouter>
);

export default Routes;