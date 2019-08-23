import { createAction, createReducer } from 'redux-act';

const BEGIN_APP_INITIALIZE = 'BEGIN_APP_INITIALIZE';
export const beginAppInitialize = createAction(BEGIN_APP_INITIALIZE);

const COMPLETE_APP_INITIALIZE = 'COMPLETE_APP_INITIALIZE';
export const completeAppInitialize = createAction(COMPLETE_APP_INITIALIZE);

const initialState = {
    initializing: false,
    initialized: false
}

export default createReducer({
    [beginAppInitialize]: (state, payload) => {
        const ns = {
            initializing: true
        };
        return Object.assign({}, state, ns);
    },
    [completeAppInitialize]: (state, payload) => {
        const ns = {
            initializing: false,
            initialized: true
        };
        return Object.assign(state, ns);
    }
}, initialState);