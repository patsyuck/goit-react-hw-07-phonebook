import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  contacts: [],
  filter: '',
  isFetching: false,
  error: null
};

/*const myMiddleware = store => next => action => {
  console.log('Alarm!')
  next(action)
}

const middleware = [myMiddleware]*/

const reducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    if (
      state.contacts.some(
        item => item.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts!`);
      return state;
    } else {
      return {
        ...state,
        contacts: [...state.contacts, payload]
      }
    }
  },
  [deleteContact]: (state, { payload }) => ({
    ...state,
    contacts: state.contacts.filter(item => item.id !== payload)
  }),
  [filterContacts]: (state, { payload }) => ({
    ...state,
    filter: payload.target.value,
  }),
});

const store = configureStore({
  reducer: {
    reducer,
  },
  /*middleware*/
});

export default store;
