import addTodoItem from "./addTodoItem";
import clearTodoContainer from "./clearTodoContainer";
import findProject from "./findProject";
import todoList from "./todoList";

function addTodoFormEventListner(target) {
    target.addEventListener('click', () => {
        const dataKey = document.querySelector('#todoHeader').getAttribute('dataKey');
        const inputValue = document.querySelector('#todoInput').value;

        if (inputValue !== '') {
            addTodoItem();
            clearTodoContainer();
            todoList(findProject(dataKey));
        }
    })
}

export default addTodoFormEventListner;