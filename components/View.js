import React, { Component } from 'react';
import { View as RNView, StatusBar } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import connectToTheme from '../containers/theme';
import ContentView from './ContentView';
import Colors from '../constants/Colors';

class View extends ContentView {
    constructor(props) {
        super(props);
        const { theme: {theme}, navigation } = this.props;
        navigation.setParams({theme});
    }
    componentDidUpdate(prevProps, prev) {
        const { theme: {theme}, navigation } = this.props;
        const { theme: {theme: prevTheme}, navigation: prevNavigation} = prevProps;
        console.log('update!');
        console.log(navigation.state);
        console.log(prevNavigation.state)
        //setTimeout(() => this.props.changeTheme(Colors.THEME.AKARI), 3000);
        if(theme.key === prevTheme.key) return;
        navigation.setParams({theme});
    }

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