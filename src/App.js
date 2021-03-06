import React from 'react';
import { connect } from 'react-redux';
import { getContacts, filterContacts, postContact, deleteExistContact } from './redux/actions';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import {getFriends, getFilter, getFetching} from './redux/contactsSelectors'

function App({ friends, filter, isFetching, handleData, handleInput, handleSubmit, handleDelete }) {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        friends={friends}
        handlerSubmit={handleSubmit}
        isFetching={isFetching}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChange={handleInput}
      />
      <ContactList
        friends={friends}
        filter={filter}
        onClick={handleDelete}
        onMount={handleData}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: getFriends(state),
    filter: getFilter(state),
    isFetching: getFetching(state)
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
