import * as React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
const client = new ApolloClient();

type Props = {
    store: any
}

export default class App extends React.Component<Props, {}> {

    render() {
        const history = syncHistoryWithStore(browserHistory, this.props.store);
        return (
            <ApolloProvider client={client}>
                <Provider  store={this.props.store}>
                    <Router key={Math.random()} history={history} routes={routes(this.props.store)} />
                </Provider>
            </ApolloProvider>
        );
    }
}
