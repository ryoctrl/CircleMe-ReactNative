import { fork, take, call, put, join, select } from 'redux-saga/effects';
import circlesFlow from './circles';

export default function* rootSaga() {
    yield fork(circlesFlow);
}