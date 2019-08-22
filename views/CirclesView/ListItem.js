import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from "react-native-expo-image-cache";
import { getSize } from '../../utils/LayoutUtil';
import { fontedText } from '../../constants/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: getSize(5),
        borderRadius: getSize(5),
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        borderTopLeftRadius: getSize(5),
        borderTopRightRadius: getSize(5),
        overflow: 'hidden'
    },
    image: {
        height: getSize(130),
    },
    contentContainer: {
        marginLeft: getSize(5)
    },
    nameText: {
        fontSize: getSize(16)
    },
    dataText: {
        fontSize: getSize(14)
    }
});

class ListItem extends Component {
    render() {
        const { circle } = this.props;
        const circleCutURL = circle.circleCut.startsWith('http') ? 'https://koetsuki.mosin.jp/api/images/no-image.png': 'https://koetsuki.mosin.jp/api/images/' + circle.circleCut;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => null}>

                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image} 
                            resizeMode="cover"
                            {...{uri: circleCutURL}}/>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={[styles.nameText, fontedText]}>
                            {circle.name}
                        </Text>
                        <Text style={[styles.dataText, fontedText]}>
                            {circle.penName}
                        </Text>
                        <Text style={[styles.dataText, fontedText]}>
                            {circle.spaceName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListItem;