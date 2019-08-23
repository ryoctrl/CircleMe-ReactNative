import React from 'react';
import { withNavigation } from 'react-navigation';
import connectToTheme from '../containers/theme';
import { fontedText } from '../constants/Styles';
import { getSize } from '../utils/LayoutUtil';
import theme from '../static/THEME';

class ContentView extends React.memo {
    /*
    static navigationOptions = ({navigation}) => {
        const { state: { params: { title = 'None', theme = {} } = {}}} = navigation;
        const backgroundColor = theme.MAIN;
        const color = theme.SUB;
        console.log(title);
        return {
            title,
            headerTitleStyle: [fontedText, {fontSize: getSize(20), color: 'black'}],
            headerStyle: {
                backgroundColor
            }
        }
    }
    */
}

export default withNavigation(connectToTheme(ContentView));