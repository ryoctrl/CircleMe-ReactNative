import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from './Icon';

class DrawerButton extends Component {
    render() {
        return  (<Button type="clear" icon={<Icon name="menu"/>} onPress={this.props.navigation.toggleDrawer}/>)
    }
}

export default withNavigation(DrawerButton);