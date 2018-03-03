import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const mainStore = createStore(
    combineReducers({
        router: routerReducer
    })
);

export default mainStore;
