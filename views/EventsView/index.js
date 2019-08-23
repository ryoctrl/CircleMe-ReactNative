import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import SafeAreaView from '../../components/View';
import { width, height, getSize } from '../../utils/LayoutUtil';
import ListItem from './ListItem';
import { fontedText } from '../../constants/Styles';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    flatList: {
        flex: 1,
        width: width * 0.95,
    }
});

class EventsView extends Component {
    static navigationOptions = {
        title: 'イベント',
        rightButton: (
            <MaterialIcons name="menu"/>
        )
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


    _extractKey = item => item.id.toString()
    _renderItem = ({item, index}) => <ListItem event={item}/>
    
    render() {
        const { navigation } = this.props;
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