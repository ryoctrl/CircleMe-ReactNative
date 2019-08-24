import React, { Component } from 'react';
import { View as RNView, StatusBar } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import connectToTheme from '../containers/theme';
import connectToNavigation from '../containers/navigation';

class View extends Component {
    render() {
        const { theme: {theme}, changeTitle } = this.props;
        return (
            <SafeAreaView style={this.props.style}>
                <StatusBar barStyle={theme.STATUS_BAR}/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export default connectToNavigation(connectToTheme(View));