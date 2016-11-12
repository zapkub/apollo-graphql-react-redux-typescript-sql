import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Schema from './server/schema';
import resolvers from './server/resolvers';

import Todo from './server/models/todo';

const app = express();

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: makeExecutableSchema({
        typeDefs: Schema,
        resolvers: resolvers
    }),
    context: {
        Todo: new Todo(),
    }
}));


app.listen(3001, () => {
    console.log('app start 3001');
});

