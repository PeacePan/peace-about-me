import React, { Component } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';

import Header from '../../partials/header/Header';
import Home from '../../pages/home/Home';
import Awards from '../../pages/awards/Awards';

const store = createStore(
    combineReducers({
        router: routerReducer
    })
);

const routeMatch = {
    '/': Home,
    '/awards': Awards
};

class Routes extends Component {
    render() {
        let shouldRedirect = () => {
            let routePath = window.location.pathname;
            return !!routeMatch[routePath];
        };

        return (
            <Provider store={store}>
                <BrowserRouter>
                <div className="route-wrapper">
                    <Route component={Header}></Route>
                    <Route path="/*" render={() => !shouldRedirect() && (<Redirect to="/" />)}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/awards" component={Awards}></Route>
                </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Routes;