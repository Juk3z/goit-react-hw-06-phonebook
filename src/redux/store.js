import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
