import addItemBtnEventListener from './eventListeners/addItemBtnEventListener';

function addTodoItemBtn() {
    const addTodoItemBtn = document.createElement('div');
    const addTodoItemText = document.createElement('p');

    addTodoItemBtn.setAttribute('id', 'addTodoItemBtn');
    addTodoItemText.setAttribute('id', 'addTodoItemText');

    addTodoItemText.innerText = 'Add Item';
    addItemBtnEventListener(addTodoItemBtn);

    addTodoItemBtn.appendChild(addTodoItemText);

    return addTodoItemBtn;
}

export default addTodoItemBtn;