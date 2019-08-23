
import React from 'react';
import { Header as RNHeader} from  'react-navigation-stack';
import connectToTheme from '../containers/theme';

class Header extends React.Component {
    render() {
        const { headerProps, theme:{theme} } = this.props;
        const { options } = headerProps.scene.descriptor;
        options.headerStyle.backgroundColor = theme.MAIN;
        options.headerTintColor = theme.SUB;
        options.headerTitleStyle.map(style => style.hasOwnProperty('color') ? style.color = theme.SUB : style);

        return (
            <RNHeader {...headerProps} headerStyle={{backgroundColor: 'black'}}/>
        )
    }
}

export default connectToTheme(Header);
