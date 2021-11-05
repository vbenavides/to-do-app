import React from 'react';

const ToDoItem = (props) => {
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
};

export { ToDoItem };
