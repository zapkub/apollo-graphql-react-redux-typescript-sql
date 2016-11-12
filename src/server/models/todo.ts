import bookshelf from '../connection';

export default class Todo extends bookshelf.Model<Todo> implements TodoType {

    name: string;
    done: boolean;

    // fetchpage plugin
    fetchPage?(options: any);

    get tableName(): string {
        return 'todos';
    }

    async getById(id: number) {
        const result = await this.query({
            where: { id }
        })
            .fetch();
        return result.toJSON();
    }

    async queryAtPageAmount(page: number, pageSize: number) {
        const query = await this.fetchPage({ page, pageSize });
        return query.toJSON();
    }
}

