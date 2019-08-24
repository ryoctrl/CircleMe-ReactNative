import { createAction, createReducer } from 'redux-act';

const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = createAction(CHANGE_TITLE);

const initialState = {
    title: ''
}

export default createReducer({
    [changeTitle]: (state, title) => {
        const ns = Object.assign({}, state, {title});
        return Object.assign({}, state, {title});
    },
}, initialState);