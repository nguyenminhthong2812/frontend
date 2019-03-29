import {combineReducers} from 'redux';

import GioHangReducer from './giohang';
import DSPReducer from './danhsachphim';

const rootReducer = combineReducers(
    {
        DSGH : GioHangReducer,
        DSP : DSPReducer
    }
);

export default rootReducer;