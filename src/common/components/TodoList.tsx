import * as React from 'react';
type Query = {
    loading: boolean,
    getTodos: {
        id: number;
        name: string;
        done: boolean;
    }[]
}

export default (props: {data: Query}) => (
    <div>
        {
            props.data.loading ? 'loading' : (
                <div>
                    {
                        props.data.getTodos.map(
                            (item) => <div key={item.id}><input type='checkbox' />{item.name}</div>
                        )
                    }
                </div>
            )
        }
    </div>
);