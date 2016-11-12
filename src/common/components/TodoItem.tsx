import * as React from 'react';
type Props = {
    name: string;
    done: boolean;
    id: number;
    onToogle?(id: number): void
}
export default ({name, done, id, onToogle}: Props) => (
    <div>
        <input
            onChange={() => onToogle(id)}
            type='checkbox' checked={done}
            />
        {name}
    </div>
);