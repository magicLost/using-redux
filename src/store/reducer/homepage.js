import * as actionTypes from '../actions/homepage';

const initialState = {

    isShowFeedBackForm: false,
    feedBackFormType: ''

};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.SHOW_FEEDBACK_FORM:
            return {
                ...state,
                isShowFeedBackForm: true,
                feedBackFormType: action.feedBackFormType
            };

        case actionTypes.HIDE_FEEDBACK_FORM:
            return {
                ...state,
                isShowFeedBackForm: false
            };

        default: return state;
    }

};

export default reducer;