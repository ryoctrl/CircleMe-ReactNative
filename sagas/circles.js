import { fork, take, call, put, join, select } from 'redux-saga/effects'
import { fetchCircles as fetchCirclesAction, successFetchCircles, failureFetchCircles} from '../modules/Circles';
import { fetchCircles } from '../libs/api';

function* fetchCirclesFlow() {
    while(true) {
        yield take(fetchCirclesAction);
        const { data, error } = yield call(fetchCircles);
        if(data && !error) {
            yield put(successFetchCircles({data}));
        } else {
            yield put(failureFetchCircles({error}));
        }
    }
}

export default function* rootCircles() {
    yield fork(fetchCirclesFlow);
}