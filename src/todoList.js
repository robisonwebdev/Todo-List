import addTodoItemBtn from "./addTodoItemBtn";
import getProjectTodos from "./getProjectTodos";
import todoListProjectName from "./todoListProjectName";

function todoList(project) {
    const todoContainer = document.querySelector('#todoContainer');
    const todoHeader = document.createElement('div');
    const todoList = document.createElement('div');

    todoHeader.setAttribute('id', 'todoHeader');
    todoHeader.setAttribute('dataKey', project['dataKey']);
    todoList.setAttribute('id', 'todoList');
    
    todoHeader.appendChild(todoListProjectName(project['name']));
    todoList.appendChild(getProjectTodos(project));

    todoContainer.appendChild(todoHeader);
    todoContainer.appendChild(todoList);
    todoContainer.appendChild(addTodoItemBtn(project));
}

export default todoList;