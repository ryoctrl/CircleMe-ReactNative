import React, { Component } from 'react';
import { View as RNView, StatusBar } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import connectToTheme from '../containers/theme';

class View extends Component {
    render() {
        const { theme: {theme} } = this.props;
        return (
            <SafeAreaView style={this.props.style}>
                <StatusBar barStyle={theme.STATUS_BAR}/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export default connectToTheme(View);