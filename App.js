import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Fonts from './constants/Fonts';
import LoginView from './views/LoginView';
import EventsView from './views/EventsView';
import CirclesView from './views/CirclesView';
import { Provider } from 'react-redux';
import configureStore from './store';

const EventsStack = createStackNavigator({
    Events: { screen: EventsView },
    Circles: { screen: CirclesView }
}, {
    initialRouteName: 'Events',
    gesturesEnabled: false,
    headerStyle: {
        backgroundColor: '#9B27B0'
    }
});

const mainContents = createDrawerNavigator({
    EventsStack
}, {
    navigationOptions: {
        gesturesEnabled: false
    }
});

const initNavigator = createStackNavigator({
    Login: { screen: LoginView },
    Main: { screen: mainContents }
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
});

const Navigation = createAppContainer(initNavigator);

const { store } = configureStore();

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
                <Navigation/>
            </Provider>
        ) : null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
