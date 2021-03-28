function clearTodoContainer() {
    const todoContainer = document.querySelector('#todoContainer');

    return todoContainer.innerHTML = '';
}

export default clearTodoContainer;