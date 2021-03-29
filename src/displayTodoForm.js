import cancelTodoFormEventListener from "./cancelTodoFormEventListener";

function displayTodoForm() {
    const todoContainer = document.querySelector('#todoContainer');
    const todoForm = document.createElement('div');
    const inputDiv = document.createElement('div');
    const btnsDiv = document.createElement('div');
    const todoItemInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    todoForm.setAttribute('id', 'todoForm');
    todoItemInput.setAttribute('type', 'text');
    todoItemInput.setAttribute('id', 'todoItemInput');
    todoItemInput.setAttribute('name', 'todoItemInput');
    addBtn.setAttribute('type', 'button');
    addBtn.setAttribute('class', 'todoFormBtns');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'todoFormBtns');

    addBtn.innerText = 'Add Item';
    cancelBtn.innerText = 'Cancel';

    cancelTodoFormEventListener(cancelBtn);

    inputDiv.appendChild(todoItemInput);
    btnsDiv.appendChild(addBtn);
    btnsDiv.appendChild(cancelBtn);
    todoForm.appendChild(inputDiv);
    todoForm.appendChild(btnsDiv);
    todoContainer.appendChild(todoForm);

    return todoContainer;
}

export default displayTodoForm;