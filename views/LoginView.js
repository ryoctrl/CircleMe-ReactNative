import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Image} from "react-native-expo-image-cache";
import { width, height, marginedWidth, getSize } from '../utils/LayoutUtil';
import Colors from '../constants/Colors';
import { verticalScale } from 'react-native-size-matters';
import Fonts from '../constants/Fonts';
import { fontedText } from '../constants/Styles';
import connectToCircles from '../containers/circles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width,
        height,
        zIndex: 0,
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        width,
        bottom: verticalScale(40)
    },
    button: {
        width: marginedWidth,
        height: getSize(40),
        marginTop: getSize(5),
        marginBottom: getSize(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: getSize(5)
    },
    authWithTwitterButton: {
        backgroundColor: Colors.TWITTER
    },
    nonAuthButton: {
        backgroundColor: Colors.MONO.GRAY
    },
    buttonText: {
        fontSize: getSize(18),
    },
    authWithTwitterText: {
        color: Colors.MONO.WHITE
    },
    nonAuthText: {
        color: Colors.MONO.BLACK
    }
});

class LoginView extends Component {
    touchAuthWithTwitter = () => {
        console.log('touchAuthWithTwitter!');
        const { fetchCircles, navigation } = this.props;
        fetchCircles();
        navigation.navigate('Main');
    }

    touchNonAuth = () => {
        console.log('touchNonAuth!');
        const { fetchCircles, navigation } = this.props;
        fetchCircles();
        navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    {...{uri: 'https://koetsuki.mosin.jp/api/images/keyvisual.png'}}
                    />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.authWithTwitterButton]}
                        onPress={this.touchAuthWithTwitter}>
                        <Text style={[fontedText, styles.buttonText, styles.authWithTwitterText]}>
                            Twitterで認証して使用
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.nonAuthButton]}
                        onPress={this.touchNonAuth}>
                        <Text style={[fontedText, styles.buttonText, styles.nonAuthText]}>
                            認証せず使用
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connectToCircles(LoginView);