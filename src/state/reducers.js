import {
    CHANGE_SEARCHFIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAIL
} from './constants';


const initialStateSearchCats = {
    searchField: ''
};

export const searchCats = (state = initialStateSearchCats, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            };
    
        default:
            return state;
    }
};


const initialStateRequestCats = {
    isPending: false,
    cats: [],
    error: null
};

export const requestCats = (state = initialStateRequestCats, action = {}) => {
    switch (action.type) {
        case REQUEST_CATS_PENDING:
            return {
                ...state,
                isPending: true
            };

        case REQUEST_CATS_SUCCESS:
            return {
                ...state,
                cats: action.payload,
                isPending: false
            };

        case REQUEST_CATS_FAIL:
            return {
                ...state,
                error: action.payload,
                isPending: false
            };
    
        default:
            return state;
    }
};
