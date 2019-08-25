import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { getSize } from '../utils/LayoutUtil';
import { SocialIcon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TWITTER,
        borderRadius: getSize(5),
        paddingLeft: getSize(5),
        paddingRight: getSize(10),
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        color: Colors.MONO.WHITE
    },
    icon: {
        backgroundColor: 'transparent',
        width: getSize(20),
        height: getSize(20),
    }
});

export default class extends Component {
    render() {
        const { style = {}, text } = this.props;
        return (
            <TouchableOpacity {...this.props} style={[style, styles.container]}>
                <SocialIcon style={styles.icon} raised={false} type="twitter"/>
                <Text style={styles.text}>
                    @{text}
                </Text>
            </TouchableOpacity>
        )
    }
}