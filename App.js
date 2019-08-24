import React from 'react';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Fonts from './constants/Fonts';
import configureStore from './store';
import Navigation from './components/Navigation';

const { store, persistor } = configureStore();

export default class App extends React.Component {
    state = {
        fontLoaded: false
    }
    componentDidMount = async () => {
        await Font.loadAsync({
            [Fonts.NOTO_SANS]: require('./assets/fonts/NotoSansCJKjp-Regular.ttf'),
            [Fonts.NOTO_SANS_BOLD]: require('./assets/fonts/NotoSansCJKjp-Bold.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return this.state.fontLoaded ? (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation/>
                </PersistGate>
            </Provider>
        ) : null;
    }
}
