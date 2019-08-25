import React, { Component } from 'react';
import { View as RNView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import connectToTheme from '../containers/theme';
import connectToNavigation from '../containers/navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class View extends Component {
    render() {
        const { theme: {theme} } = this.props;
        return (
            <SafeAreaView style={[this.props.style, styles.container]}>
                <StatusBar barStyle={theme.STATUS_BAR}/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export default connectToNavigation(connectToTheme(View));