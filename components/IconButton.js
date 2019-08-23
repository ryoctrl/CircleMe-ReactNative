import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from './Icon';

class IconButton extends Component {
    render() {
        const { iconName, action } = this.props;

        return  (<IconButton type="clear" icon={<Icon name={iconName}/>} onPress={action}/>)
    }
}

export default withNavigation(IconButton);