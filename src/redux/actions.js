import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterContacts = createAction('FILTER_CONTACTS');

export const fetchRequest = createAction('API/REQUEST')
export const fetchSuccess = createAction('API/SUCCESS')
export const fetchError = createAction('API/ERROR')

export const postContact = newContact => dispatch => {
    dispatch(fetchRequest())
    axios.post('http://localhost:3004/contacts', newContact)
        .then((data) => {
            dispatch(fetchSuccess(data))
            dispatch(addContact(newContact))
        })
        .catch((error) => {
            /*console.log('ERROR')*/
            dispatch(fetchError(error))
        })
}

export const getContacts = () => dispatch => {
    dispatch(fetchRequest())
    axios.get('http://localhost:3004/contacts')
        .then((data) => {
            dispatch(fetchSuccess(data))
        })
        .catch((error) => {
            /*console.log('ERROR')*/
            dispatch(fetchError(error))
        })
}

export const deleteExistContact = id => dispatch => {
    dispatch(fetchRequest())
    axios.delete(`http://localhost:3004/contacts${id}`)
        .then((data) => {
            dispatch(fetchSuccess(data))
            dispatch(deleteContact(id))
        })
        .catch((error) => {
            /*console.log('ERROR')*/
            dispatch(fetchError(error))
        })
}

/*export const updateContacts = id => (dispatch, getState) => {
    const { state } = getState()
    const contact = state.contacts.find(i => i.id !== id)
    dispatch(fetchRequest())
    axios.put(`http://localhost:3004/contacts${contact.id}`, contact)
        .then((data) => {
            dispatch(fetchSuccess(data))
            dispatch(updateContact(contact.id))
        })
        .catch((error) => {
            dispatch(fetchError(error))
        })
}*/
