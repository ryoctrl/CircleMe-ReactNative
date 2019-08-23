import { fork, take, call, put, join, select } from 'redux-saga/effects';
import {
    beginAppInitialize,
    completeAppInitialize
} from '../modules/App';
import {
    fetchCircles
} from './circles';

function* initializeFlow() {
    const { payload: navigation } = yield take(beginAppInitialize);
    const task = yield fork(fetchCircles)
    yield join(task);
    navigation.navigate('Main');
}

export default function* rootApp() {
    yield fork(initializeFlow);
}