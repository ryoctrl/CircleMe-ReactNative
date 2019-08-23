import { connect } from 'react-redux';
import {
    beginAppInitialize
} from '../modules/App';

const mapStateToProps = state => ({app: state.app});

const mapDispatchToProps = dispatch => ({initialize: navigation => dispatch(beginAppInitialize(navigation))});

export default connect(mapStateToProps, mapDispatchToProps);