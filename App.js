import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Fonts from './constants/Fonts';
import LoginView from './views/LoginView';
import EventsView from './views/EventsView';
import CirclesView from './views/CirclesView';
import { Provider } from 'react-redux';
import configureStore from './store';
import Colors from './constants/Colors';
import { fontedText } from './constants/Styles';
import { getSize } from './utils/LayoutUtil';

const EventTabStack = createBottomTabNavigator({
    Circles: { screen: CirclesView },
}, {
    initialRouteName: 'Circles',
    navigationOptions: {
        gesturesEnabled: false
    },
});


const EventsStack = createStackNavigator({
    Events: { screen: EventsView },
    Detail: { screen: EventTabStack },
}, {
    initialRouteName: 'Events',
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerTitleStyle: [fontedText, {fontSize: getSize(20), color: 'white'}],
        headerStyle: {
            backgroundColor: Colors.THEME.YUKARI.MAIN
        }
    }
});

const mainContents = createDrawerNavigator({
    EventsStack,
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
    headerMode: 'none',
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
