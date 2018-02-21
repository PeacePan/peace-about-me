import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';

import Header from '../partials/header/Header';
import Home from '../pages/home/Home';
import Awards from '../pages/awards/Awards';

const store = createStore(
    combineReducers({
        router: routerReducer
    })
);

const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Route component={Header}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/awards" component={Awards}></Route>
        </div>
        </BrowserRouter>
    </Provider>
  );

  export default Routes;