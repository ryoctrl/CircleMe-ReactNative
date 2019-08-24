import { fork, take, call, put, join, select, delay } from 'redux-saga/effects';
import {
    beginAppInitialize,
    completeAppInitialize
} from '../modules/App';
import {
    fetchCircles
} from './circles';
import { successFetchCircles } from '../modules/Circles';

function* test() {
    yield delay(5000);
    const circles = yield  select(stores => stores.circles.datas);
    circles[0] = Object.assign({}, circles[0]);
    circles[0].name = 'のらくら';
    yield put(successFetchCircles({data: circles}));
}

function* initializeFlow() {
    const { payload: navigation } = yield take(beginAppInitialize);
    const task = yield fork(fetchCircles)
    yield join(task);
    navigation.navigate('Main');
    //yield fork(test);
}

export default function* rootApp() {
    yield fork(initializeFlow);
}