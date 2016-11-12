import { ActionCreator, Action } from 'redux';
export const TOOGLE_FILTER = 'TOOGLE_FILTER';

interface ToogleFilterAction extends Action {
}

export const toogleFilter: ActionCreator<ToogleFilterAction>  = () => {
    return {
        type: TOOGLE_FILTER
    };
};


