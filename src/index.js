import './styles.css';
import { ToDo, ToDoList } from './classes';
import { crearToDoHtml } from './js/componentes';


export const toDoList = new ToDoList();

// toDoList.toDos.forEach(toDo => crearToDoHtml(toDo));
toDoList.toDos.forEach(crearToDoHtml);

console.log(toDoList.toDos);  // FIXME Delete this!

 