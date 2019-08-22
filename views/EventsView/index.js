import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { width, height, getSize } from '../../utils/LayoutUtil';
import ListItem from './ListItem';
import { fontedText } from '../../constants/Styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
    }
});

class EventsView extends Component {
    static navigationOptions = {
        title: 'イベント',
        headerTitleStyle: [fontedText, {fontSize: getSize(20), color: 'white'}],
        headerStyle: {
            backgroundColor: '#9B27B0'
        }
    }
    state = {
        events: [
            {
                id: 1,
                name: 'この声届け月までも伍',
                shortName: '声月伍',
                circleCount: 100,
                favCount: 0,
                locate: '',
                date: '',
                image: 'https://koetsuki.mosin.jp/api/images/keyvisual.png',
            },
            {
                id: 2,
                name: 'この声届け月までも六',
                shortName: '声月六',
                circleCount: 100,
                favCount: 0,
                locate: '',
                date: '',
                image: 'https://koetsuki.mosin.jp/api/images/keyvisual.png',
            }
        ]
    }

    constructor(props) {
        super(props);
        console.log(EventsView.navigationOptions);
    }



    _extractKey = item => item.id.toString()
    _renderItem = ({item, index}) => <ListItem event={item}/>
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    keyExtractor={this._extractKey}
                    data={this.state.events}
                    renderItem={this._renderItem}
                />
            </SafeAreaView>
        )
    }
};

export default EventsView;