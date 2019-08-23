import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import connectToTheme from '../../containers/theme';
import SafeAreaView from '../../components/View';
import Colors from '../../constants/Colors';
const themes = Object.entries(Colors.THEME).map(([k, v]) => v);

class SettingsView extends Component {
    static navigationOptions = {
        title: '設定'
    }
    changeTheme = (value, index) => {
        this.props.changeTheme((themes.filter(t => t.key === value)[0]));
    }

    render() {
        const { theme: { theme } } = this.props;

        return (
            <SafeAreaView>
                <View>
                    <Picker 
                        selectedValue={theme.key}
                        onValueChange={this.changeTheme}
                        >
                    {themes.map(theme => <Picker.Item key={theme.key} label={theme.name} value={theme.key}/>)}
                    </Picker>
                </View>
            </SafeAreaView>
        )
    }
}

export default connectToTheme(SettingsView);
