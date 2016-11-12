import * as React from 'react';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import TodoList from '../components/TodoList';
import * as TodoActions from './../actions/todo';


const query = gql`
    query {
        getTodos {
            name
            id
            done
        }
    }
`;

const mapToStore = (store) => {
    return {
        
    };
};
const mapToDispatch = (dispatch) => {
    return {

    };
};
export default compose(
    graphql(query),
    connect(mapToStore, mapToDispatch)
)(TodoList);