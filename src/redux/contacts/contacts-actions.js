import types from './contacts-types';

export const addContact = (contact) => ({
    type: types.add,
    payload: {
        id: contact.id,
        name: contact.name,
        number: contact.number
        }
});
    
export const deleteContact = (id) => ({
    type: types.delete,
    payload: id
});