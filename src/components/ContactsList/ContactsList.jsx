import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

    const filteredContacts = () => {
      if (filter) {
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter)
        );
      } else {
        return contacts;
      }
    };
  
  return (
    <ListByContacts>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ListByContacts>
  );
}
