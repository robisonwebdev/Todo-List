import addTodoFormEventListner from './eventListeners/addTodoFormEventListener';
import cancelTodoFormEventListener from './eventListeners/cancelTodoFormEventListener';

function displayTodoForm() {
    const todoContainer = document.querySelector('#todoContainer');
    const todoForm = document.createElement('div');
    const inputDiv = document.createElement('div');
    const btnsDiv = document.createElement('div');
    const todoInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    todoForm.setAttribute('id', 'todoForm');
    inputDiv.setAttribute('id', 'todoInputDiv');
    todoInput.setAttribute('type', 'text');
    todoInput.setAttribute('id', 'todoInput');
    todoInput.setAttribute('name', 'todoInput');
    todoInput.setAttribute('placeholder', 'Enter Item');
    btnsDiv.setAttribute('id', 'todoFormBtnsDiv');
    addBtn.setAttribute('type', 'button');
    addBtn.setAttribute('class', 'todoFormBtns');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'todoFormBtns');

    addBtn.innerText = 'Add Item';
    cancelBtn.innerText = 'Cancel';

    addTodoFormEventListner(addBtn);
    cancelTodoFormEventListener(cancelBtn);

    inputDiv.appendChild(todoInput);
    btnsDiv.appendChild(addBtn);
    btnsDiv.appendChild(cancelBtn);
    todoForm.appendChild(inputDiv);
    todoForm.appendChild(btnsDiv);
    todoContainer.appendChild(todoForm);

    return todoContainer;
}

export default displayTodoForm;