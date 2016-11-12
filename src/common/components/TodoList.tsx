import * as React from 'react';
import TodoItem from './TodoItem';

type Query = {
    loading: boolean,
    getTodos: {
        id?: number;
        name?: string;
        done?: boolean;
    }[]
}
type Props = {
    /**
     * Apollo props (remote state)
     */
    Todos?: Query;
    toogleTodo?(id: number): void;

    /**
     * Redux props (local state)
     */
    isFilter: boolean;
    toogleFilter(): void;

}
export default ({toogleTodo, Todos, isFilter, toogleFilter}: Props) => (
        <div>
            <div>
                <input type='checkbox' onChange={toogleFilter} checked={isFilter} /> <label>Filter undone todo</label>
            </div>
            {
                Todos.loading ? 'loading' : (
                    <div>
                        {
                            Todos.getTodos.map(
                                (item) => <TodoItem onToogle={toogleTodo} {...item} key={item.id} />
                            )
                        }
                    </div>
                )
            }
        </div>
    );