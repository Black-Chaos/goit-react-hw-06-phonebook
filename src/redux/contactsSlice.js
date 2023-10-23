import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phone-book',
  storage,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact(state, { payload }) {
      return {contacts: [...state.contacts, { id: nanoid(), ...payload }]};
    },
    deleteContact(state, { payload }) {
      return {contacts: state.contacts.filter(({ id }) => id !== payload)};
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSliceReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
