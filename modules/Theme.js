import { createAction, createReducer } from 'redux-act';
import Colors from '../constants/Colors';

const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = createAction(CHANGE_THEME);

const initialState = {
    theme: Colors.THEME.YUKARI
};

export default createReducer({
    [changeTheme]: (state, theme) => {
        return Object.assign({}, state, {theme});
    }
}, initialState);
