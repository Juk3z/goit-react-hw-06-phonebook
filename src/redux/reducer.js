// import filterReducer from './filter/filter-reducers';
// import {combineReducers} from 'redux'
function localeContacts() {
    if (localStorage.contacts) {
        const contactsFromLocalStorage = JSON.parse(
        localStorage.getItem("contacts")
        );
        return {
            contacts: contactsFromLocalStorage,
            filter: ''
        }
    };
    return {
        contacts: [],
        filter: ''
    }
};

const initialContacts = localeContacts();

// constnewinit = combineReducers({
//     contacts: localeContacts(),
//     filter: filterReducer
// })


const reducer = (state = initialContacts, {type, payload}) => {
    switch (type) {
        case 'contacts/add':
            localStorage.setItem("contacts", JSON.stringify([...state.contacts, payload]));
            return { ...state, contacts: [...state.contacts, payload] }

        case 'contacts/delete':
            const newContacts = state.contacts.filter((item) => item.id !== payload);
            localStorage.setItem("contacts", JSON.stringify(newContacts))
            return { ...state, contacts: newContacts };
        
        case 'filter/change':
            return {...state, filter: payload}
        default: return state;
    }
};

export default reducer;