
export const SET_TEST_DATA = "SET_TEST_DATA";
export const LOADING = "LOADING";


export const SET_IS_SHOW_TEST_1 = "SET_IS_SHOW_TEST_1";
export const SET_IS_SHOW_TEST_2 = "SET_IS_SHOW_TEST_2";


export const setTestData = (data) => {

    return {
        type: SET_TEST_DATA,
        postData: data
    };

};

export const requestTestData = (data) => {

    return dispatch => {

        dispatch({type: LOADING});

        setTimeout(() => {

            dispatch(setTestData(data));

        }, 3000);
    };

};

