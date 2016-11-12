import bookshelf from '../connection';
const logdown = require('logdown');

const logger = logdown({ predix: 'Todo' });

export default class Todo extends bookshelf.Model<Todo> implements TodoType {

    name: string;
    done: boolean;

    // fetchpage plugin (typescript bug)
    fetchPage?(options: any);

    get tableName(): string {
        return 'todos';
    }

    async toogleById(id: number) {
        const todo = await (new Todo).query({
            where: { id }
        }).fetch();
        logger.info(`Toogle todo by id **${id}*`);
        todo.set('done', !todo.get('done'));
        await todo.save();
        return todo.toJSON();
    }

    async getById(id: number): Promise<any> {
        const result = await (new Todo).query({
            where: { id }
        })
            .fetch();
        logger.info('Find todo by Id');
        console.dir(result);
        return result.toJSON();
    }

    async queryAtPageAmount(page: number, pageSize: number, filter?: boolean) {
        const condition =  {};
        logger.info(`Query todo list ${page} ${pageSize} ${filter}`);
        if (filter) {
            condition['done'] = filter;
        }
        const query = await (new Todo).where(condition).fetchPage({ page, pageSize });
        return query.toJSON();
    }

}

