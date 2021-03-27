function todoListProjectName(name) {
    const todoListProjectName = document.createElement('h2');

    todoListProjectName.setAttribute('class', 'todoListProjectName');

    todoListProjectName.innerText = name;

    return todoListProjectName;
}

export default todoListProjectName;