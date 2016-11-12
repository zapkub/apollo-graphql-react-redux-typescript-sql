
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers';

/**
 * Dev middleware
 */
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

declare const window: any;
declare const module: any;
let latestStore;
let __apolloClient;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer;
const logger = createLogger();
const promise = promiseMiddleware();
/**
 * Hot load reducers
 */
if (module.hot) {
    module.hot.accept('../reducers', () => {
        let newReducer = require('../reducers').default;
        rootReducer = combineReducers<any>(Object.assign({}, {routing: routerReducer }, reducers, {apollo: __apolloClient}));
        latestStore.replaceReducer(rootReducer); // eslint-disable-line global-require
});
}

export default function configureStore(initState: Object, client: any) {
    __apolloClient = client.reducer();
    rootReducer = combineReducers<any>(Object.assign({}, {routing: routerReducer }, reducers, {apollo: __apolloClient}));
    latestStore = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk, promise, logger, client.middleware())));
    return latestStore;
};

