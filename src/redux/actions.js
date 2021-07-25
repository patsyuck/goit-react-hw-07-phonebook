import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterContacts = createAction('FILTER_CONTACTS');
export const getData = createAction('GET_DATA')
export const fetchRequest = createAction('API/REQUEST')
export const fetchSuccess = createAction('API/SUCCESS')
export const fetchError = createAction('API/ERROR')

export const postContact = newContact => dispatch => {
    dispatch(fetchRequest())
        /*axios.post('http://localhost:3004/contacts', newContact)*/
        axios.post('http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts', newContact)
        .then(() => {
            dispatch(fetchSuccess())
            dispatch(addContact(newContact))
        })
        .catch((error) => {
            dispatch(fetchError(error))
        })
}

export const getContacts = () => dispatch => {
    dispatch(fetchRequest())
        /*axios.get('http://localhost:3004/contacts')*/
        axios.get('http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts')
        .then((data) => {
            dispatch(fetchSuccess())
            dispatch(getData(data))
        })
        .catch((error) => {
            dispatch(fetchError(error))
        })
}

export const deleteExistContact = id => dispatch => {
    dispatch(fetchRequest())
        /*axios.delete(`http://localhost:3004/contacts/${id}`)*/
        axios.get('http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts')
        .then((data) => {
            dispatch(fetchSuccess(data))
            dispatch(deleteContact(id))
        })
        .catch((error) => {
            dispatch(fetchError(error))
        })
}
