function removeTodoForm() {
    const todoContainer = document.querySelector('#todoContainer');
    const todoForm = document.querySelector('#todoForm');

    todoContainer.removeChild(todoForm);

    return todoContainer;
}

export default removeTodoForm;