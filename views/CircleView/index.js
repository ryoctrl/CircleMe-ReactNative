import React, { Component } from 'react';
import SafeAreaView from '../../components/View';
import { View, Text, StyleSheet } from 'react-native';
import connectToCircles from '../../containers/circles';
import { width, getSize } from '../../utils/LayoutUtil'
import { SocialIcon } from 'react-native-elements';
import { Linking } from 'expo';
import { fontedText } from '../../constants/Styles';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import Divider from '../../components/Divider';
import { formatData } from '../../utils/LayoutUtil';
import ImageBackground from '../../components/ImageBackground';
import TwitterButton from '../../components/TwitterButton';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width,
        alignItems: 'center',
    },
    nameText: {
        fontSize: getSize(18),
    },
    penNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    penNameText: {
        fontSize: getSize(22),
    },
    spaceText: {
        fontSize: getSize(18),
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center'
    },
    overlayContent: {
        width: width * 0.9,
    },
    flatList: {
        width: width * 0.9,
    },
    icon: {
        height: getSize(20),
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
        const circleCutURL = circle.circleCut.startsWith('http') ? 'https://koetsuki.mosin.jp/api/images/no-image.png': 'https://koetsuki.mosin.jp/api/images/' + circle.circleCut;
        return (
            <SafeAreaView>
                <View style={styles.wrapper}>
                    <ImageBackground
                        style={{width}} 
                        resizeMode="cover"
                        {...{uri: circleCutURL}}>
                            <View style={styles.overlay}>
                                <View style={styles.overlayContent}>
                                    <Text style={[fontedText, styles.nameText]}>
                                        {circle.name}
                                    </Text>
                                    <View style={styles.penNameContainer}>
                                        <Text style={[fontedText, styles.penNameText]}>
                                            {circle.penName}
                                        </Text>
                                        {circle.twitter ? <TwitterButton onPress={() => this._twitterPress(circle.twitter)} style={styles.icon} text={circle.twitter}/> : null}
                                    </View>
                                    <Text style={[fontedText, styles.spaceText]}>
                                        {circle.spaceName}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>

                    <Divider />
                
                    <FlatList
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
