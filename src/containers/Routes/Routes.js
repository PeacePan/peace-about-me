import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import mainStore from '../../redux/mainStore';
import Header from '../../components/Header/Header';
import Home from '../../containers/Home/Home';
import Awards from '../../containers/Awards/Awards';

const routeMatch = {
    '/': Home,
    '/home': Home,
    '/awards': Awards
};

class Routes extends Component {
    render() {
        let shouldRedirect = () => {
            let routePath = window.location.pathname;
            return !routeMatch[routePath];
        };

        return (
            <Provider store={mainStore}>
                <BrowserRouter>
                <div className="route-wrapper">
                    <Route component={Header}></Route>
                    <Route path="/*" render={() => shouldRedirect() && (<Redirect to="/home" />)}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/awards" component={Awards}></Route>
                </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Routes;