import * as actionTypes from "../actions/test";

const initialState = {

    isLoading: false,

    isShowTest1: true,
    isShowTest2: false,

    postData: null,

};

const reducer = ( state = initialState, action) => {

    switch(action.type){

        case actionTypes.SET_TEST_DATA:
            return {
                ...state,
                postData: action.postData,
                isLoading: false
            };

        case actionTypes.SET_IS_SHOW_TEST_1:
            return {
                ...state,
                isShowTest1: action.isShow
            };

        case actionTypes.SET_IS_SHOW_TEST_2:
            return {
                ...state,
                isShowTest2: action.isShow
            };

        case actionTypes.LOADING:
            console.log("dispatch loading", state.isLoading);
            return {
                ...state,
                isLoading: true
            };


        default: return state;

    }



};

export default reducer;