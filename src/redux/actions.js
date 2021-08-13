export const addContact = (contact) => ({
        type: 'contacts/add',
    payload: {
        id: contact.id,
        name: contact.name,
        number: contact.number
        }
});
    
export const deleteContact = (id) => ({
    type: 'contacts/delete',
    payload: id
});

export const changeFilter = (value) => ({
    type: 'filter/change',
    payload: value
})