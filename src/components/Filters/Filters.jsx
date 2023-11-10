import React from 'react';
import css from "./Filters.module.css"


const Filters = ({ handleFilterContact,value }) => {
 


  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      value={value}
      onChange={handleFilterContact} 
      placeholder="Поиск по имени, начните писать..."
    />
  );
};

export default Filters;