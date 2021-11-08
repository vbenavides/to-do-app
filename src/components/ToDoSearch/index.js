import React, { useState } from 'react';

const ToDoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <label>
      <input
        onChange={onSearchValueChange}
        placeholder='Ingresa Texto'
        value={searchValue}
        type='search'
      />
      <p>{searchValue}</p>
    </label>
  );
};

export { ToDoSearch };
