import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { width, height, getSize } from '../../utils/LayoutUtil';
import ListItem from './ListItem';
import { fontedText } from '../../constants/Styles';
import connectToCircles from '../../containers/circles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
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

class CirclesView extends Component {
    static navigationOptions = {
        title: 'サークル',
        headerTitleStyle: [fontedText, { fontSize: getSize(20) }]
    }
    

    _extractKey = item => item.id.toString()
    _renderItem = ({ item, index }) => item.empty ? <View style={{flex: 1}}><Text>No</Text></View>: <ListItem circle={item} />

    render() {
        const { circles } = this.props;
        const circleData = formatData(circles.datas, 2);
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    keyExtractor={this._extractKey}
                    data={circleData}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
            </SafeAreaView>
        )
    }
};

export default connectToCircles(CirclesView);