import { createStore, applyMiddleware, combineReducers }  from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import saga from '../sagas'
import circlesReducer from '../modules/Circles';
import appReducer from '../modules/App';
import themeReducer from '../modules/Theme';
import navigationReducer from '../modules/Navigation';

const persistConfig = {
    key: 'CircleMe-ReactNative',
    storage,
    whitelist: ['theme']
};

const reducers = combineReducers({
    circles: circlesReducer,
    app: appReducer,
    theme: themeReducer,
    navigationData: navigationReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export default initialState => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    const persistor = persistStore(store);
    sagaMiddleware.run(saga);
    return { store, persistor };
};

