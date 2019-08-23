import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { width, height, getSize } from '../../utils/LayoutUtil';
import ListItem from './ListItem';
import { fontedText } from '../../constants/Styles';
import connectToCircles from '../../containers/circles';
import IconButton from '../../components/IconButton';

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

class CirclesView extends Component {
    static navigationOptions = {
        title: 'サークル',
        headerLeft: <IconButton iconName="keyboard_arrow_left" action="back" />
    }
    static navigationOptions = ({navigation}) => ({title: 'サークル'})
    _extractKey = item => item.id.toString()
    _renderItem = ({ item, index }) => item.empty ? <View style={{flex: 1}}><Text>No</Text></View>: <ListItem circle={item} />

    render() {
        const { circles, navigation } = this.props;
        const circleData = formatData(circles.datas, 2);
        return (
            <SafeAreaView style={styles.container} navigation={navigation}>
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