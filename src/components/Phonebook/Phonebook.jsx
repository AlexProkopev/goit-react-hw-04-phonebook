import React, { useState } from 'react';
import css from "./Phonebook.module.css"

const Phonebook = ({handleAddContact}) => {
 

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');



  const handleInputChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    switch(name){
      case 'name':
        setName(value);
        return
      case 'number':
        setNumber(value);
        return;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
   

    const contacts = {
      name: String(name),
      number: Number.parseFloat(number),
    };

    handleAddContact(contacts);

    setName('');
    setNumber('');
  };

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="name">Введете имя</label>
        <input className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
          
          <label className={css.label} htmlFor="number">Введете Номер</label>
        <input
        className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required 
          value={number}
          onChange={handleInputChange}
        />
        <button className={css.submitBtn} type="submit">Add contact</button>
      </form>
    );
  }

export default Phonebook