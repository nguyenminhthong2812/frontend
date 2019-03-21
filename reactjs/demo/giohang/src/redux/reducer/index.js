import {combineReducers} from 'redux';

import GioHangReducer from './giohang';

const rootReducer = combineReducers(
    {
        DSGH : GioHangReducer
    }
);

export default rootReducer;