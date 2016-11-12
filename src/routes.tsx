import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import LandingPage from './common/containers/LandingPage';
import Root from './common/Root';

export default (store: any) => (
    <Route path='/' component={Root}>
        <IndexRoute component={LandingPage} />
    </Route>
); 