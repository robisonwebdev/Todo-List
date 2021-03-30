import findProject from './findProject';

function addTodoItem() {
    const dataKey = document.querySelector('#todoHeader').getAttribute('dataKey');
    const todoInput = document.querySelector('#todoInput').value;

    findProject(dataKey)['todo'].push(todoInput);
}

export default addTodoItem;