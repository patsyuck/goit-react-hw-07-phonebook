import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getContacts, filterContacts, postContact, deleteExistContact } from './redux/actions';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App({ friends, filter, isFetching, handleData, handleInput, handleSubmit, handleDelete }) {
  /* 1-ий спосіб: через хуки в App */
  /*useEffect(() => {
    dispatch(getContacts())
    handleData()
  }, [])*/

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
        onMount={() => handleData()}
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
    handleData: () => dispatch(getContacts()),
    handleInput: event => dispatch(filterContacts(event)),
    handleSubmit: contact => dispatch(postContact(contact)),
    handleDelete: id => dispatch(deleteExistContact(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
