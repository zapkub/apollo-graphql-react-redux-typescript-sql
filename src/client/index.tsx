/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import configureStore from '../common/store/configureStore';
const AppContainer = require('react-hot-loader').AppContainer;
import App from './App';
declare var module: any;
declare var window: any;


const mount = document.createElement('div');
document.body.appendChild(mount);
const store = configureStore();
window.onload = function () {
    render(<App store={store} />, mount);
};


if (module.hot) {
    module.hot.accept('./App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./App').default;
        render(
            <AppContainer>
                <NextApp store={store} />
            </AppContainer>,
            mount
        );
    });
}