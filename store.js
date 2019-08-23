import { createStore, applyMiddleware, combineReducers }  from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import saga from './sagas';
import circlesReducer from './modules/Circles';
import appReducer from './modules/App';
import themeReducer from './modules/Theme';

const persistConfig = {
    key: 'CircleMe-ReactNative',
    storage,
};

export default initialState => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            circles: circlesReducer,
            app: appReducer,
            theme: themeReducer
        }),
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(saga);
    return { store };
};

