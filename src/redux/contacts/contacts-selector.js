// import { useSelector } from "react-redux";

export const getContacts = (state) => state.contacts;

export const getFilteredContacts = (state) => {
    const filterValue = state.filter;
    const contacts = getContacts(state);

    return contacts.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase()));
}