import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
const rootReducer = combineReducers({
    phonebook: reducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
