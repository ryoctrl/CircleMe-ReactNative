import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { width, height } from '../utils/LayoutUtil';

const styles = StyleSheet.create({

});

export default class EventsView extends Component {
    render() {
        return (
            <View>
                <Text>
                    Events List!
                    {width},{height}
                </Text>
            </View>
        )
    }
};
