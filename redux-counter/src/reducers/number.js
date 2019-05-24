// 액션을 타입에 따라 변화 시키는 역할
import * as types from '../actions/ActionTypes';

//초기화
const initialState = {
    number: 0
};

// 리듀서 함수 정의 리듀서 state , action 으 파라미터로 
// state 가 정의 되지 않으면 초기 (initalState ) 기본ㄱ밧을 사용

const number = (state = initialState, action) => {
    switch (action.type){
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1
            };
        default:
            return state;
    }
};

export default number;
