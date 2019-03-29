import {ADD_DSP} from '../constants/actiontype';

let DSP = []

const DSPReducer = (state = DSP,action) => {
    switch(action.type){
        case ADD_DSP:
            var updateState = [...action.dsp];
            return updateState;
        default: return [...state];
    }
}

export default DSPReducer;