import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import connectToNavigation from '../containers/navigation';
import Icon from './Icon';
import { getCurrentRoute } from '../libs/helper';

class DrawerButton extends Component {
    render() {
        const { navigation } = this.props;
        const route = getCurrentRoute(navigation.state);
        const { params: { leftType = 'Drawer'} = {} } = route;

        let component = null;

        switch(leftType) {
            case 'Drawer':
                return (<Button type="clear" icon={<Icon name="menu"/>} onPress={navigation.toggleDrawer}/>);
            case 'Back':
                return (<Button type="clear" icon={<Icon name="keyboard-arrow-left"/>} onPress={() => navigation.pop()}/>);
            default:
                break;
        }
        return component;
    }
}

export default withNavigation(connectToNavigation(DrawerButton));