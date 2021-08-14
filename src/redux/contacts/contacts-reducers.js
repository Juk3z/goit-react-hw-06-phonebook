import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

const contactsReducer = createReducer(localContacts(), {
    [addContact]: (state, {payload}) => {
        // localStorage.setItem("contacts", JSON.stringify([...state, payload]));
        return [...state,  payload]
    },
    [deleteContact]: (state, {payload}) => {
        const newContacts = state.filter((item) => item.id !== payload);
        // localStorage.setItem("contacts", JSON.stringify(newContacts))
        return newContacts;
    },
})

function localContacts() {
    // if (localStorage.contacts) {
    //     const contactsFromLocalStorage = JSON.parse(
    //     localStorage.getItem("contacts")
    //     );
    //     return contactsFromLocalStorage
    // };
    return  []
};

export default contactsReducer;