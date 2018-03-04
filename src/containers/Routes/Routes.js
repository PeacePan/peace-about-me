import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import mainStore from '../../redux/mainStore';
import Header from '../../components/Header/Header';

import Home from '../../containers/Home/Home';
import Experience from '../../containers/Experience/Experience';
import Awards from '../../containers/Awards/Awards';

import './Routes.css';

class Routes extends Component {
    constructor(props) {
        super(props);

        this.routes = [{
            path: '/',
            component: Home
        }, {
            path: '/home',
            component: Home
        }, {
            path: '/experience',
            component: Experience
        }, {
            path: '/education',
            component: null
        }, {
            path: '/awards',
            component: Awards
        }];
    }

    shouldRedirect() {
        let routePath = window.location.pathname;
        return (() => {
            for (let i in this.routes) {
                if (this.routes[i].path === routePath) {
                    return false;
                }
            }
            return true;
        })();
    }

    render() {
        return (
            <Provider store={mainStore}>
                <BrowserRouter>
                <div className="route-wrapper">
                    <Route component={Header}></Route>
                    <Route path="/*" render={() => this.shouldRedirect() && (<Redirect to="/home" />)}></Route>
                    {this.routes.map((route, i) => {
                        return <Route exact
                            key={i}
                            path={route.path}
                            component={route.component}>
                        </Route>;
                    })}
                </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Routes;