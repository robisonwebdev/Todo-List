import projects from './projects';

function addTodoItem() {
    const dataKey = document.querySelector('#todoHeader').getAttribute('dataKey');
    const todoInput = document.querySelector('#todoInput').value;

    projects.forEach((project) => {
        if (project['dataKey'] === dataKey) {
            project['todo'].push(todoInput);
        }
    })
}

export default addTodoItem;