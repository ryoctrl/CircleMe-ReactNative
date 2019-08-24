import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from '../../components/View';
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
        headerLeft: <IconButton iconName="keyboard_arrow_left" action="back" />
    }
    _extractKey = item => item.id.toString()
    _renderItem = ({ item, index }) => item.empty ? <View style={{flex: 1}}/>: <ListItem circle={item} />

    render() {
        const { circles } = this.props;
        const circleData = formatData(circles.datas, 2);

        return (
            <SafeAreaView style={styles.container} title="サークル">
                <FlatList
                    style={styles.flatList}
                    removeClippedSubviews={true}
                    initialNumToRender={6}
                    keyExtractor={this._extractKey}
                    data={circleData}
                    execData={circles.updatedAt}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
            </SafeAreaView>
        )
    }
};

export default withNavigation(connectToCircles(CirclesView));