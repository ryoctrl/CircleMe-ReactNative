import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';

const { width } = Dimensions.get('screen');

class NinthDivider extends Component {
    render() {
        return (
            <View style={{width: width * 0.9}}>
                <Divider {...this.props} />
            </View>
        );
    }
}
export default NinthDivider;