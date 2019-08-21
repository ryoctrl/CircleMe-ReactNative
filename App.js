import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Fonts from './constants/Fonts';
import LoginView from './views/LoginView';
import EventsView from './views/EventsView';

const mainContents = createDrawerNavigator({
    Events: { screen: EventsView }
}, {
        initialRouteName: 'Events'
    });

const initNavigator = createStackNavigator({
    Login: { screen: LoginView, 
        navigationOptions: () => ({
            header: null
        }),
    },
    Main: { screen: mainContents }
}, {
    initialRouteName: 'Login'
});

const Navigation = createAppContainer(initNavigator);

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
            <Navigation/>
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
