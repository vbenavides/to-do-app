import { CreateToDoButton } from '../components/CreateToDoButtun';
import { ToDoCounter } from '../components/ToDoCounter';
import { ToDoItem } from '../components/ToDoItem';
import { ToDoList } from '../components/ToDoList';
import { ToDoSearch } from '../components/ToDoSearch';

const tasks = [
  {
    text: 'Encender la computadora',
    completed: false,
  },
  {
    text: 'Abrir el navegador',
    completed: false,
  },
  {
    text: 'Dejar la descargar abierta',
    completed: false,
  },
];

const App = () => {
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {tasks.map((task) => (
          <ToDoItem key={task.task} text={task.text} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
};

export default App;
