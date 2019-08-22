import { connect } from 'react-redux';
import * as circleActions from '../modules/Circles';
import CircleReducer from '../modules/Circles';

const mapStateToProps = state => {
    return {
        circles: state.circles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCircles: () => dispatch(circleActions.fetchCircles())
    }
};

export default connect(mapStateToProps, mapDispatchToProps);