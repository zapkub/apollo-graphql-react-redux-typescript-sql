import * as React from 'react';

import { ApolloProvider } from 'react-apollo';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';


type Props = {
    store: any
    client: any
}

export default class App extends React.Component<Props, {}> {

    render() {
        const history = syncHistoryWithStore(browserHistory, this.props.store);
        return (
            <ApolloProvider store={this.props.store} client={this.props.client}>
                    <Router key={Math.random()} history={history} routes={routes(this.props.store)} />
            </ApolloProvider>
        );
    }
}
