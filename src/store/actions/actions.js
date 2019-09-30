import axios from 'axios';

export const INPUT_CHANGE = "INPUT_CHANGE";
export const SET_ELEMENTS = "SET_ELEMENTS";
export const SET_FORM_ERROR = "SET_FORM_ERROR";
export const SET_POST_DATA = "SET_POST_DATA";

const SAVE_RESULT = "SAVE_RESULT";

const SET_INGREDIENTS = "SET_INGREDIENTS";
const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";

export const SET_IS_SHOW_TEST_1 = "SET_IS_SHOW_TEST_1";
export const SET_IS_SHOW_TEST_2 = "SET_IS_SHOW_TEST_2";



export const setPostData = (data) => {

    return {
        type: SET_POST_DATA,
        postData: data
    };

};

export const requestTestData = (data) => {

    return dispatch => {
        setTimeout(() => {

            dispatch(setPostData(data));

        }, 3000);
    };

};


///////////

const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients
    }
};

const fetchIngredientsFailed = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED
    }
};

const initIngredients = () => {

    return dispatch => {

        axios.get("http://public.local/get_ingredients")
            .then( response => {
                dispatch(setIngredients(response.data))
            })
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            });

    }

};

export const setFormError = (formError) => {

    return {
        type: SET_FORM_ERROR,
        formError: formError
    };

};

export const saveResult = (res) => {

    return {
        type: SAVE_RESULT,
        res: res
    };

};

export const storeResult = (res) => {

    return dispatch => {
        setTimeout(() => {

            dispatch(saveResult(res));

        }, 2000);
    };

};
