import React, { Component } from 'react';
import SafeAreaView from '../../components/View';
import { View, Text, StyleSheet } from 'react-native';
import connectToCircles from '../../containers/circles';
import { width, height, getSize } from '../../utils/LayoutUtil'
import Icon from '../../components/Icon';
import { SocialIcon } from 'react-native-elements';
import { Linking } from 'expo';
import { fontedText } from '../../constants/Styles';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import Divider from '../../components/Divider';
import { formatData } from '../../utils/LayoutUtil';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    wrapper: {
        width: width * 0.9,
        height,
    },
    nameText: {
        fontSize: getSize(18)
    },
    penNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //height: getSize(22),
    },
    penNameText: {
        fontSize: getSize(20),
    },
    spaceText: {
        fontSize: getSize(18)

    },
    introContainer: {
    },
    flatList: {
        flexGrow: 1
    }
});

class CircleView extends Component {
    _twitterPress = twitter => Linking.openURL(`twitter://user?screen_name=${twitter}`)

    componentDidMount() {
        const { circles: { datas: circles }, navigation } = this.props;
        const circleId = navigation.getParam('circleId');
        const circle = circles.filter(circle => circle.id === circleId);
        navigation.setParams({title: circle[0].name});
    }
    componentDidUpdate(prevProps) {
        const { circles: { datas: circles }, navigation } = this.props;
        const { navigation: { state: { params: prevParams } = {} } = {}} = prevProps;
        const circleId = navigation.getParam('circleId');
        const circle = circles.filter(circle => circle.id === circleId);
        if(prevParams && prevParams.title === circle[0].name) return;
        navigation.setParams({title: circle[0].name});
    }

    _extractKey = item => item.id.toString()
    _renderItem = ({item, index}) => item.empty ? <View style={{flex: 1}}/>: <ListItem goods={item}/>

    render() {
        
        const { circles: { datas: circles }, navigation } = this.props;
        const circleId = navigation.getParam('circleId');
        const circle = circles.filter(circle => circle.id === circleId)[0];
        return (
            <SafeAreaView style={styles.center}>
                <View style={styles.wrapper}>
                    <View style={styles.introContainer}>
                        <Text style={[fontedText, styles.nameText]}>
                            {circle.name}
                        </Text>
                        <View style={styles.penNameContainer}>
                            <Text style={[fontedText, styles.penNameText]}>
                                {circle.penName}
                            </Text>
                            {circle.twitter ? <SocialIcon type="twitter" light onPress={() => this._twitterPress(circle.twitter)} raised={false}/> : null}
                        </View>
                        <Text style={[fontedText, styles.spaceText]}>
                            {circle.spaceName}
                        </Text>
                    </View>

                    <Divider />
                
                    <FlatList
                        contentContainerStyle={{flexGrow: 1}}
                        style={styles.flatList}
                        keyExtractor={this._extractKey}
                        data={formatData(circle.goods, 2)}
                        execData={circle.updatedAt}
                        renderItem={this._renderItem}
                        numColumns={2}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default connectToCircles(CircleView);
