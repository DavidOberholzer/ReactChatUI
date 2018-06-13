import { createStore } from 'redux';
import { reducers } from './reducers';

const store = (initialState = {}) =>
    createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
