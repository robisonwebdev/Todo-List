function removeTodoForm() {
    const todoContainer = document.querySelector('#todoContainer');
    const addTodoItemForm = document.querySelector('#addTodoItemForm');

    todoContainer.removeChild(addTodoItemForm);

    return todoContainer;
}

export default removeTodoForm;