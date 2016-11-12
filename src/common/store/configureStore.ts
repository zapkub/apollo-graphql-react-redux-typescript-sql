
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers';
declare const window: any;
declare const module: any;
let latestStore;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers<any>(Object.assign({}, {routing: routerReducer }, reducers));


if (module.hot) {
    module.hot.accept('../reducers', () => {
        let newReducer = require('../reducers').default;
        rootReducer = combineReducers<any>(Object.assign({}, {routing: routerReducer }, reducers));
        latestStore.replaceReducer(rootReducer); // eslint-disable-line global-require
});
}

export default function configureStore(initState?: Object) {

    latestStore = createStore(rootReducer, {});
    return latestStore;
};

