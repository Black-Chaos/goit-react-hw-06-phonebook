import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Container } from './App.styled';

// const LS_KEY = 'phone-book';

// const contactsLS = JSON.parse(localStorage.getItem(LS_KEY)) || [];

export function App() {
  const contacts = useSelector(getContacts());
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(contactsLS);
  // const [filter, setFilter] = useState('');

  // useEffect(() => localStorage.setItem(LS_KEY, JSON.stringify(contacts)), [contacts]);

  const addContact = contact => {
    if (contacts.some(({ name }) => name === contact.name)) return alert(`${contact.name} is already in contacts`);
    dispatch(contacts);
    return true
  };

  // const filteredContacts = () => {
  //   if (filter) {
  //     return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  //   } else {
  //     return contacts;
  //   }
  // };

  // const deleteContact = contactId =>
  //   setContacts( contacts  => contacts.filter(({ id }) => id !== contactId));

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <Container>
          <div className="form-container">
            <ContactForm addContact={addContact} />
            <Filter
              // val={filter}
              // handleFilter={e => setFilter(e.target.value.toLowerCase())}
            />
          </div>
          <div className="contacts-container">
            <h2 className="title">Contacts</h2>
            <ContactsList
              // contacts={filteredContacts()}
              // handleDelete={deleteContact}
            />
          </div>
        </Container>
      </>
    );
  
}
