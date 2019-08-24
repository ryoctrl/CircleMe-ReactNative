import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import { width, getSize } from '../utils/LayoutUtil';

class NinthDivider extends Component {
    render() {
        return (
            <View style={{marginLeft: -getSize(50), width: width * 2}}>
                <Divider {...this.props} />
            </View>
        );
    }
}
export default NinthDivider;