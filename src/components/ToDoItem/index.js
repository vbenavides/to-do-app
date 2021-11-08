import React from 'react';

const ToDoItem = (props) => {
  return (
    <li>
      <span onClick={props.onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
};

export { ToDoItem };
