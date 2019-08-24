import { createAction, createReducer } from 'redux-act';

//action
const FETCH_CIRCLES = 'FETCH_CIRCLES';
const SUCCESS_FETCH_CIRCLES = 'SUCCESS_FETCH_CIRCLES';
const FAILURE_FETCH_CIRCLES = 'FAILURE_FETCH_CIRCLES';

export const changeCircles = createAction('CHANGE_CIRCLES');

export const fetchCircles = createAction(FETCH_CIRCLES);
export const successFetchCircles = createAction(SUCCESS_FETCH_CIRCLES);
export const failureFetchCircles = createAction(FAILURE_FETCH_CIRCLES);

const initialState = {
    datas: [],
    fetching: false,
    updatedAt: null,
}

export default createReducer({
    [fetchCircles]: (state, payload) => {
        const newState = Object.assign({}, state);
        newState.fetching = true;
        return newState;
    },
    [successFetchCircles]: (state, payload) => {
        const newState = Object.assign({}, state);
        newState.fetching = false;
        newState.datas = payload.data;
        newState.updatedAt = Date.now();
        return newState;
    },
    [failureFetchCircles]: (state, payload) => {
        const newState = Object.assign({}, state);
        newState.fetching = false;
        return newState;
    }
}, initialState);