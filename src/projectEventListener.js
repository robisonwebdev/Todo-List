// Event Listener for clicking on a project.

import clearTodoContainer from "./clearTodoContainer";
import todoList from "./todoList";

function projectEventListener(target, project) {
    target.addEventListener('click', () => {
        clearTodoContainer();
        todoList(project);
    })
}

export default projectEventListener;