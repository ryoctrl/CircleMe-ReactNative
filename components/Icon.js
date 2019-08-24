import React, { Component } from 'react';
import { Icon as RNEIcon} from 'react-native-elements'
import connectToTheme from '../containers/theme';

class Icon extends Component {
    render() {
        delete(this.props.color);
        return <RNEIcon {...this.props} color={this.props.reversed ? this.props.theme.theme.MAIN : this.props.theme.theme.SUB}/>
    }
}

export default connectToTheme(Icon);
