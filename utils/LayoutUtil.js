import { Dimensions } from 'react-native';
import { scale, verticalScale } from "react-native-size-matters";

export const { width, height } = Dimensions.get('screen');
export const marginedWidth = width * 0.9;
export const getSize = size => Math.min(scale(size), verticalScale(size));