function getProjectTodos(project) {
    const projectTodoList = document.createElement('div');
    const ul = document.createElement('ul');

    projectTodoList.setAttribute('id', 'projectTodoList');

    for (let i = 0; i < project['todo'].length; i++) {
        const li = document.createElement('li');

        li.innerText = project['todo'][i];

        ul.appendChild(li);
    }

    projectTodoList.appendChild(ul);

    return projectTodoList;
}

export default getProjectTodos;