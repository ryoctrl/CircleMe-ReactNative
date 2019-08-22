import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Fonts from './Fonts';

export const fontedText = StyleSheet.create({
    fontedText: {
        fontFamily: Fonts.NOTO_SANS,
        ...Platform.select({
            ios: {
                marginTop: scale(5)
            },
            android: {
                margin: 0
            }
        })
    }
}).fontedText;

export const marginedText = StyleSheet.create({
    marginedText: {
        ...Platform.select({
            ios: {
                marginTop: scale(5)
            },
            android: {
                margin: 0
            }
        })
    }
}).marginedText;