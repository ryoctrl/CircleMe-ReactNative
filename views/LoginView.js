import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import {Image} from "react-native-expo-image-cache";
import { width, height, marginedWidth, getSize } from '../utils/LayoutUtil';
import Colors from '../constants/Colors';
import { verticalScale } from 'react-native-size-matters';
import Fonts from '../constants/Fonts';
import { fontedText } from '../constants/Styles';
import connectToCircles from '../containers/circles';
import connectToApp from '../containers/app';
import { Linking } from 'expo';

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
    },
    activityIndicator: {
        flex: 1,
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class LoginView extends Component {
    static navigationOptions = {
        header: null

    }
    buccha = () => {
        Linking.openURL('twitter://user?screen_name=buccha4986');

    }

    mosin = () => {
        Linking.openURL('twitter://user?screen_name=mosin_nozomi');

    }
    touchAuthWithTwitter = () => {
        console.log('touchAuthWithTwitter!');
        const { initialize, navigation } = this.props;
        initialize(navigation);
    }

    touchNonAuth = () => {
        console.log('touchNonAuth!');
        const { initialize, navigation } = this.props;
        initialize(navigation);
    }

    render() {
        const { app } = this.props;
        return (
            <View style={styles.container}>
                {app.initializing && <ActivityIndicator size="large" style={styles.activityIndicator}/>}
                <Image
                    style={styles.backgroundImage}
                    /*{...{uri: 'https://koetsuki.mosin.jp/api/images/keyvisual.png'}}*/
                    {...{uri: ''}}
                    />
                <View style={styles.buttonContainer}>
                    {/*
                    <TouchableOpacity
                        style={[styles.button, styles.authWithTwitterButton]}
                        onPress={this.buccha}>
                        <Text style={[fontedText, styles.buttonText, styles.authWithTwitterText]}>
                            buccha4986
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.authWithTwitterButton]}
                        onPress={this.mosin}>
                        <Text style={[fontedText, styles.buttonText, styles.authWithTwitterText]}>
                            mosin_nozomi
                        </Text>
                    </TouchableOpacity>
                    */}
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

export default connectToApp(LoginView)