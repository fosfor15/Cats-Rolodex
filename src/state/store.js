import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';

import { searchCats } from './reducers';

export const store = createStore(
    searchCats,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(logger)
    )
);
