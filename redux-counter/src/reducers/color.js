// 액션을 타입에 따라 변화 시키는 역할
import * as types from '../actions/ActionTypes';

const initialState = {
    color:'red'
};

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
}

export default color;