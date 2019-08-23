import React, { Component } from 'react';
import { View as RNView, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { width, height, getSize } from '../../utils/LayoutUtil';
import ListItem from './ListItem';
import View from '../../components/View';
import { fontedText } from '../../constants/Styles';
import connectToCircles from '../../containers/circles';
import ContentView from '../../components/ContentView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    flatList: {
        flex: 1,
        width: width * 0.95
    }
});

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
        numberOfElementsLastRow++;
    }
    return data;
};

class CirclesView extends ContentView {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        console.log('circles!');
        console.log(navigation.state);
        navigation.setParams({ title: 'サークル' });
    }

    _extractKey = item => item.id.toString()
    _renderItem = ({ item, index }) => item.empty ? <View style={{flex: 1}}><Text>No</Text></View>: <ListItem circle={item} />

    render() {
        const { circles, navigation} = this.props;
        const circleData = formatData(circles.datas, 2);
        return (
            <View style={styles.container} navigation={navigation}>
                <FlatList
                    style={styles.flatList}
                    keyExtractor={this._extractKey}
                    data={circleData}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
            </View>
        )
    }
};

export default connectToCircles(CirclesView);