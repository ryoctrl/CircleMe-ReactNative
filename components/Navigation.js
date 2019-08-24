import React from 'react';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import LoginView from '../views/LoginView';
import EventsView from '../views/EventsView';
import CirclesView from '../views/CirclesView';
import CircleView from '../views/CircleView';
import SettingsView from '../views/SettingsView';
import Header from './Header';
import DrawerButton from './DrawerButton';
import IconButton from './IconButton';
import Routes from '../constants/Routes';
import { getCurrentRoute } from '../libs/helper';
import Icon from './Icon';
import MapView from '../views/MapView';


const CircleStack = createStackNavigator({
    [Routes.Circles.key]: { 
        screen: CirclesView,
    },
    [Routes.Circle.key]: {
        screen: CircleView,
    }
}, {
    initialRouteName: Routes.Circles.key,
    headerMode: 'none',
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }
})

const EventTabStack = createBottomTabNavigator({
    [Routes.CircleStack.key]: { 
        screen: CircleStack,
        navigationOptions: {
            tabBarLabel: Routes.Circles.title,
            tabBarIcon: <Icon name="list" reversed={true}/>
        }
    },

    [Routes.Map.key]: {
        screen: MapView,
        navigationOptions: {
            tabBarLabel: Routes.Map.title,
            tabBarIcon: <Icon name="map" reversed={true}/>
        }
    }
}, {
    initialRouteName: Routes.CircleStack.key,
});


const EventsStack = createStackNavigator({
    [Routes.Events.key]: { screen: EventsView },
    [Routes.EventTabStack.key]: { screen: EventTabStack }
}, {
    initialRouteName: Routes.Events.key,
    defaultNavigationOptions: ({ navigation }) => {
        const navRoute = getCurrentRoute(navigation.state)
           , route = navRoute && navRoute.routeName && Routes[navRoute.routeName];
        const { params = {} } = navRoute;
        const title = params.title || (route ? route.title : '');
        return {
            header: headerProps => <Header headerProps={headerProps}/>,
            headerLeft: <DrawerButton/>,
            gesturesEnabled: false,
            title
        }
    },
});


const SettingsStack = createStackNavigator({
    [Routes.Settings.key]: { screen: SettingsView }
}, {
    initialRouteName: Routes.Settings.key,
    defaultNavigationOptions: ({ navigation }) => {
        const navRoute = getCurrentRoute(navigation.state)
           , route = navRoute && navRoute.routeName && Routes[navRoute.routeName]
           , title = route ? route.title : ""
        return {
            header: headerProps => <Header headerProps={headerProps}/>,
            headerLeft: <DrawerButton/>,
            title
        }
    },
});

const mainContents = createDrawerNavigator({
    ['イベント']: EventsStack,
    ['設定']: SettingsStack
}, {
    navigationOptions: {
        gesturesEnabled: false
    }
});

const initNavigator = createStackNavigator({
    Login: { 
        screen: LoginView,
    },
    Main: { screen: mainContents }
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
});

export const Navigation = createAppContainer(initNavigator);

export default Navigation;