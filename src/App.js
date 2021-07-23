import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getContacts, filterContacts, postContact, deleteExistContact } from './redux/actions';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App({ friends, filter, isFetching, handleData, handleInput, handleSubmit, handleDelete }) {
  /*const isFetching = useSelector(state => state.reducer.isFetching)
  console.log(isFetching)*/
  /*const delContact = (id) => { dispatch(...(id)) }
  const updateContact = (id) => {dispatch(...(id))}*/
  /*useEffect(() => {
    dispatch(getContacts())
    handleData()
  }, [])*/
  /*console.log(getContacts())*/
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        handlerSubmit={contact => handleSubmit(contact)}
        isFetching={isFetching}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChange={event => handleInput(event)}
      />
      <ContactList
        friends={friends}
        filter={filter}
        onClick={id => handleDelete(id)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: state.reducer.contacts,
    filter: state.reducer.filter,
    isFetching: state.reducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /*handleData: () => dispatch(getContacts()),*/
    handleInput: event => dispatch(filterContacts(event)),
    /*handleSubmit: contact => dispatch(addContact(contact)),*/
    handleSubmit: contact => dispatch(postContact(contact)),
    /*handleDelete: id => dispatch(deleteContact(id)),*/
    handleDelete: id => dispatch(deleteExistContact(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
