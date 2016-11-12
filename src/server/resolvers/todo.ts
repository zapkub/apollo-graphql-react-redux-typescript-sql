import TodoObject from '../models/todo';

export const TodoResolver = {
    Query: {
        async getTodos(_: any, args: { limit?: number }, context: { Todo: TodoObject }) {
            return context.Todo.queryAtPageAmount(1, 10);
        }
    }
};
