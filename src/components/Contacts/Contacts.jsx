import React from 'react';
import css from './Contacts.module.css';

 const Contacts =({hendleDeletedContact,contacts})=> {

    return (
      <div>
        <ul className={css.listContacts}>
          {contacts.map(({ id, name, number }) => (
            <li className={css.elemContacts} key={id}>
              {name}: {number}{' '}
              <button
                className={css.btnContacts}
                type="button"
                onClick={() => {
                  hendleDeletedContact(id);
                }}
              >
                {' '}
                Deleted{' '}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default Contacts