import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';
import { getContacts } from 'redux/selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts());
  const dispatch = useDispatch();
  
  return (
    <ListByContacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={() => dispatch(id)}
        />
      ))}
    </ListByContacts>
  );
}
