import {ADD_DSP} from '../constants/actiontype';


export const actAddPhim = (dsp) => {
    return {
        type: ADD_DSP,
        dsp
    }
}