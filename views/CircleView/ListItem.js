import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from "react-native-expo-image-cache"
import { getSize } from '../../utils/LayoutUtil';
import ImageBackground from '../../components/ImageBackground';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: getSize(5),
    },
    image: {
        height: getSize(200),
        justifyContent: 'flex-end'
    },
    overlay: {
        backgroundColor: 'rgba(32, 32, 32, 0.3)'
    },
    text: {
        fontSize: getSize(16),
        color: Colors.MONO.WHITE
    }
})

class ListItem extends Component {
    render() {
        const { goods } = this.props;
        const goodsImageURL = `https://koetsuki.mosin.jp/api/images/${goods.image.path}`;
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image} 
                    resizeMode="cover"
                    {...{uri: goodsImageURL}}>
                        <View style={styles.overlay}>
                            <Text style={styles.text}>{goods.name}</Text>
                            <Text style={styles.text}>{goods.price}</Text>
                        </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ListItem;