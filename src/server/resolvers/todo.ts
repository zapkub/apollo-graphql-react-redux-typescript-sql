import TodoObject from '../models/todo';

export const TodoResolver = {
    Query: {
        async getTodos(_: any, args: { page?: number; limit?: number; filter?: boolean }, context: { Todo: TodoObject }) {
            return context.Todo.queryAtPageAmount(args.page || 1, args.limit || 20, args.filter);
        },
        async getTodoById(_, {id}: { id: number }, {Todo}: { Todo: TodoObject }) {
            return await Todo.getById(id);
        }
    },
    Mutation: {
        async toogleTodo(_, arg, {Todo}: { Todo: TodoObject }) {
            const result = await Todo.toogleById(arg.id);
            return result;
        }
    }
};
