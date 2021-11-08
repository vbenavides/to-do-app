import React from 'react';

const ToDoCounter = ({ totalToDos, completedToDos }) => {
  return (
    <h2>
      Has Completado {completedToDos} de {totalToDos} Tareasssss
    </h2>
  );
};

export { ToDoCounter };
