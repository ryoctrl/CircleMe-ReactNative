import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from "react-native-expo-image-cache";
import { getSize } from '../../utils/LayoutUtil';
import { fontedText } from '../../constants/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
//import Routes from '../../constants/Routes';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: getSize(100),
        padding: getSize(5),
    },
    imageContainer: {
        flex: 3,
    },
    image: {
        height: getSize(90),
    },
    contentContainer: {
        flex: 7,
    },
    nameText: {
        fontSize: getSize(16)
    },
    dataText: {
        fontSize: getSize(14)
    }
});

class ListItem extends Component {
    _onPress = () => this.props.navigation.navigate('Circles', {leftType: 'Back'});
    render() {
        const { event } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image} 
                        resizeMode="cover"
                        {...{uri: event.image}}/>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.nameText, fontedText]}>
                        {event.name}
                    </Text>
                    <Text style={[styles.dataText, fontedText]}>
                        サークル数: {event.circleCount}
                    </Text>
                    <Text style={[styles.dataText, fontedText]}>
                        お気に入り数: {event.favCount}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(ListItem);