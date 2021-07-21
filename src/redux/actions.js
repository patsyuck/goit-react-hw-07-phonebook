import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterContacts = createAction('FILTER_CONTACTS');

export const fetchRequest = () => ({
    type: 'API/REQUEST'
})

export const fetchSuccess = (data) => ({
    type: 'API/SUCCESS',
    payload: data
})

export const fetchError = (error) => ({
    type: 'API/ERROR',
    payload: error
})

export const postContact = newContact => dispatch => {
    axios.post('http://localhost:3004/contacts', newContact)
        .then((data) => {
            dispatch(addContact(newContact))
        })
        .catch(() => {console.log('ERROR')})
}
