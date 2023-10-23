import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phone-book',
  storage,
};


const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [...state, {id: nanoid(),...payload}];
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const {addContact, deleteContact} = contactSlice.actions;
export const contactSliceReducer = persistReducer(persistConfig, contactSlice);