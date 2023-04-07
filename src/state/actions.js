import {
    CHANGE_SEARCHFIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAIL
} from './constants';

export const setSearchField = (value) => ({
    type: CHANGE_SEARCHFIELD,
    payload: value
});

export const requestCats = () => (dispatch) => {
    dispatch({ type: REQUEST_CATS_PENDING });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(cats => {
            if (!Array.isArray(cats)) {
                throw Error('Cats data is not available. Try again later.');
            }

            dispatch({
                type: REQUEST_CATS_SUCCESS,
                payload: cats
            });
        })
        .catch(error => {
            dispatch({
                type: REQUEST_CATS_FAIL,
                payload: error
            });
        });
};
