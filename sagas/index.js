import { fork, take, call, put, join, select } from 'redux-saga/effects';
import appFlow from './app';
import circlesFlow from './circles';

export default function* rootSaga() {
    yield fork(appFlow);
    yield fork(circlesFlow);
}