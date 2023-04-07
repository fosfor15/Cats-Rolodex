import { CHANGE_SEARCHFIELD } from './constants';

export const setSearchField = (value) => ({
    type: CHANGE_SEARCHFIELD,
    payload: value
});
