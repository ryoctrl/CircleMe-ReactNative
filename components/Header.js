import React from 'react';
import { Text } from 'react-native';
import { Header } from  'react-navigation-stack';
import connectToTheme from '../containers/theme';
import connectToNavigation from '../containers/navigation';
import { fontedText } from '../constants/Styles';
import { getSize } from '../utils/LayoutUtil';

export default connectToNavigation(connectToTheme(class extends React.Component {
    render() {
        const { headerProps, theme:{theme}, navigationData } = this.props;
        const { options } = headerProps.scene.descriptor;
        //options.title = navigationData.title;
        options.headerStyle ? options.headerStyle.backgroundColor = theme.MAIN : options.headerStyle = { backgroundColor: theme.MAIN };
        options.headerTintColor = theme.SUB;
        options.headerTitleStyle 
            ? options.headerTitleStyle.map(style => style.hasOwnProperty('color') ? style.color = theme.SUB : style)
            : options.headerTitleStyle = [fontedText, { fontSize: getSize(20), color: theme.SUB}];
        
        return <Header {...headerProps} headerStyle={{}}/>
    }
}));

export const Title = connectToNavigation(class extends React.Component {
    render() {
        return (
            <Text>
                hello
            </Text>
        )
    }
});
