import addTodoItem from "./addTodoItem";

function addTodoFormEventListner(target) {
    target.addEventListener('click', () => {
        const inputValue = document.querySelector('#todoInput').value;

        if (inputValue !== '') {
            addTodoItem();
        }
    })
}

export default addTodoFormEventListner;