

const Query = `
    type Query {
        getTodos(page: Int, limit: Int, filter: Boolean): [Todo]
        getTodoById(id: Int!): Todo
    }
`;

const Mutation = `
    type Mutation {
        createTodo(name: String!): Todo
        toogleTodo(id: Int!): Todo
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