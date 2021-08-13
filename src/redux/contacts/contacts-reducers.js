import types from './contacts-types'

function localContacts() {
    if (localStorage.contacts) {
        const contactsFromLocalStorage = JSON.parse(
        localStorage.getItem("contacts")
        );
        return contactsFromLocalStorage
    };
    return  []
};

const contactsReducer = (state = localContacts(), {type, payload}) => {
    switch (type) {
        case types.add:
            localStorage.setItem("contacts", JSON.stringify([...state, payload]));
            return [...state,  payload]

        case types.delete:
            const newContacts = state.filter((item) => item.id !== payload);
            localStorage.setItem("contacts", JSON.stringify(newContacts))
            return newContacts;
        
        default: return state;
    }
};

export default contactsReducer;