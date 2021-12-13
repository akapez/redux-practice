import {combineReducers, createStore, applyMiddleware} from 'redux';
import { accountReducer } from './reducers/accountReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    account: accountReducer
});

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

export default store;