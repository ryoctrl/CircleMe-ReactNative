import { connect } from 'react-redux';
import {changeTheme} from '../modules/Theme';

const mapStateToProps = state => ({theme: state.theme});
const mapDispatchToProps = dispatch => ({changeTheme: theme => dispatch(changeTheme(theme))});

export default connect(mapStateToProps, mapDispatchToProps);