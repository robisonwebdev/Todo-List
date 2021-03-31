import displayAllTodoList from './displayAllTodoList';
import todoListProjectName from './todoListProjectName';

function allTodos() {
    const todoContainer = document.querySelector('#todoContainer');
    const todoHeader = document.createElement('div');
    const todoList = document.createElement('div');

    todoHeader.setAttribute('id', 'todoHeader');
    todoList.setAttribute('id', 'todoList');

    todoHeader.appendChild(todoListProjectName('All Projects'));
    todoList.appendChild(displayAllTodoList());

    todoContainer.appendChild(todoHeader);
    todoContainer.appendChild(todoList);
}

export default allTodos;