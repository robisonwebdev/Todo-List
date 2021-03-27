import projectTodoList from "./projectTodoList";

function projectEventListener(target, project) {
    target.addEventListener('click', () => {
        projectTodoList(project);
    })
}

export default projectEventListener;