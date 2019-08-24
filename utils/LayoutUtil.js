import { Dimensions } from 'react-native';
import { scale, verticalScale } from "react-native-size-matters";

export const { width, height } = Dimensions.get('screen');
export const marginedWidth = width * 0.9;
export const getSize = size => Math.min(scale(size), verticalScale(size));

export const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
        numberOfElementsLastRow++;
    }
    return data;
};