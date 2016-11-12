import * as TodoActions from './../actions/todo';
export type todoState = {
    isFilter: boolean;
}
export const todo = (state: todoState = { isFilter: false }, action) => {
    switch (action.type) {
        case TodoActions.TOOGLE_FILTER:
            return {
                isFilter: !state.isFilter
            };
        default:
            return Object.assign({}, state);
    }
};
