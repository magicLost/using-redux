import * as actionTypes from './../actions/tantamareski';

const initialState = {

    //SECTIONS
    activeSectionIndex: 1,

    isTantamareskiSectionCreated: false,
    isContactsSectionCreated: false,

    //FORMS
    isShowFeedBackForm: false,
    feedBackFormType: '',

    calcTantamareskiPriceResult: ''

};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.SET_ACTIVE_SECTION_INDEX:
            return {
                ...state,
                activeSectionIndex: action.activeSectionIndex
            };

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

        case actionTypes.SET_CALC_TANTAMARESKI_RESULT:
            return {
                ...state,
                calcTantamareskiPriceResult: action.result
            };

        default: return state;
    }

};

export default reducer;