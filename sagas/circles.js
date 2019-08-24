import { fork, take, call, put, join, select, takeEvery, delay } from 'redux-saga/effects'
import { fetchCircles as fetchCirclesAction, successFetchCircles, failureFetchCircles, changeCircles} from '../modules/Circles';
import { fetchCircles as fetchCirclesAPI} from '../libs/api';

export function* fetchCircles() {
    const { data, error } = yield call(fetchCirclesAPI);
    if(data && !error) {
        yield put(successFetchCircles({data}));
    } else {
        yield put(failureFetchCircles({error}));
    }
}

function* fetchCirclesFlow() {
    yield takeEvery(fetchCirclesAction, fetchCircles);
}

export default function* rootCircles() {
    yield fork(fetchCirclesFlow);
}