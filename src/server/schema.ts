

const Query = `
    type Query {
        getTodos(limit: Int): [Todo]
    }
`;

const Mutation = `
    type Mutation {
        createTodo(name: String!): Todo
    }
`;

const Todo = `
    type Todo {
        id: Int
        name: String
        done: Boolean
    }
`;


const Schema = `
    schema {
        query: Query
        mutation: Mutation
    }
`;


export default [Schema, Query, Mutation, Todo];