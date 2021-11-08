import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const tasks = [
//   {
//     text: 'Encender la computadora',
//     completed: false,
//   },
//   {
//     text: 'Abrir el navegador',
//     completed: false,
//   },
//   {
//     text: 'Dejar la descargar abierta',
//     completed: false,
//   },
// ];

const App = () => {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
  } = useLocalStorage('ToDos_V1', []);

  const [searchValue, setSearchValue] = useState('');

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = newToDos[toDoIndex].completed
      ? false
      : true;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  useEffect(() => {
    console.log('useEffect');
  }, [totalToDos]);

  return (
    <AppUI
      loading={loading}
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
};

export default App;
