import { Header } from 'react-navigation-stack';

export default class CustomHeader extends Header {
    constructor(props) {
        super(props);
        console.log('constructing!');

    }
    render() {
        console.log('child header rendering!')
        return (
            <View>

            </View>
        )
        //super(render);
    }
}
