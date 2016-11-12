import * as React from 'react';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import TodoList from '../components/TodoList';
import { toogleFilter } from './../actions/todo';
import { findIndex } from 'lodash';
const update = require('react-addons-update');

const query = gql`
    query Todos ($filter: Boolean){
        getTodos(filter: $filter) {
            name
            id
            done
        }
    }
`;

const TOOGLE_TODO_MUTATION = gql`
mutation Todo($id: Int!){
    toogleTodo(id: $id){
        done
        id
    }
}`;

/** 
 * Optimistic Toogle Todo
 */

const updateQueries = {
    Todos: (prev: { getTodos: TodoType[] }, {mutationResult}) => {
        const index = findIndex(prev.getTodos, { id: mutationResult.data.toogleTodo.id });
        return update(prev, {
            getTodos: {
                [`${index}`]: {
                    done: {
                        $set: mutationResult.data.toogleTodo.done
                    }
                }
            }
        });
    }
};

const ToogleTodo = {
    props: ({ownProps, mutate}) => ({
        toogleTodo: async (id: number) => {
            await mutate({
                variables: { id },
                optimisticResponse: {
                    /**
                     * Mock a predictable response
                     * and wait for real response
                     */
                    __typename: 'Mutation',
                    toogleTodo: {
                        __typename: 'Todo',
                        done: true,
                        id
                    }
                },
                updateQueries
            });
        }
    })
};

const mapToStore = (store) => {
    return {
        isFilter: store.todo.isFilter
    };
};
const mapToDispatch = (dispatch, {Todos}) => {
    return {
        toogleFilter(e: React.FormEvent) {
            Todos.refetch({filter: e.target['checked']});
            dispatch(toogleFilter());
        }
    };
};
export default compose(
    graphql(query, {
        name: 'Todos', options: (props) => {
            console.log(props);
            return {
                variables: {
                    filter: null
                }
            };
        }
    }),
    graphql(TOOGLE_TODO_MUTATION, ToogleTodo),
    connect(mapToStore, mapToDispatch)
)(TodoList);