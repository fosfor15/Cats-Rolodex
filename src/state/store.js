import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { searchCats } from './reducers';
import { requestCats } from './reducers';

const rootReducer = combineReducers({ searchCats, requestCats });

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk /*, logger */),
        /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
);
