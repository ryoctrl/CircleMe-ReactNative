import { connect } from 'react-redux';
import { changeTitle } from '../modules/Navigation';

const mapStateToProps = state => ({navigationData: state.navigationData});
const mapDispatchToProps = dispatch => ({changeTitle: title => dispatch(changeTitle(title))});

export default connect(mapStateToProps, mapDispatchToProps);