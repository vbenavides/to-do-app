import React from 'react';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoItem } from '../ToDoItem';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';

const AppUI = ({
  loading,
  error,
  totalToDos,
  completedToDos,
  searchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
  setSearchValue,
}) => {
  return (
    <>
      <ToDoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Error</p>}
        {!loading && !searchedToDos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedToDos.map((todo) => (
          <ToDoItem
            key={todo.text}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
            text={todo.text}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
};

export { AppUI };
