import React, { useEffect, useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filters from './Filters/Filters';
import css from './App.module.css';

const App = () => {

  const localContacts = () => JSON.parse(localStorage.getItem('contacts')) || [];

  const [contactsState, setContacts] = useState(localContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = contacts => {
    const hasDuplicatesName = contactsState.some(
      contact => contact.name.toLowerCase() === contacts.name.toLowerCase()
    );

    const hasDuplicatesNumber = contactsState.some(
      contact => contact.number === contacts.number
    );

    if (hasDuplicatesName) {
      alert(`${contacts.name} is already in contacts`);
      return;
    } else if (hasDuplicatesNumber) {
      alert(`${contacts.number} is already in contacts`);
      return;
    }

    const uniqueId = nanoid();
    const formattedName =
      contacts.name.charAt(0).toUpperCase() + contacts.name.slice(1);

    const finalContact = {
      id: uniqueId,
      name: formattedName,
      number: contacts.number,
    };

    setContacts([...contactsState, finalContact]);
  };

  const hendleDeletedContact = id => setContacts(contactsState.filter(contact => contact.id !== id));
 

  const handleFilterContact = evt => setFilter(evt.currentTarget.value);
  

  const getContacts = () => {
    const filterLowerCase = filter.toLowerCase();

    return contactsState.filter(({ name }) =>
      name.toLowerCase().includes(filterLowerCase)
    );
  };

  //--------------------------------------

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsState));
  }, [contactsState]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Phonebook
        handleAddContact={handleAddContact}
        contactState={contactsState}
      />

      <div className={css.filtersWrap}>
        <h2 className={css.title}>Contacts</h2>
        {contactsState.length ? (
          <Filters handleFilterContact={handleFilterContact} value={filter} />
        ) : (
          <h2 className={css.title}>Создайте первый контакт</h2>
        )}
      </div>
      <Contacts
        contacts={getContacts()}
        hendleDeletedContact={hendleDeletedContact}
      />
    </div>
  );
};

export default App;