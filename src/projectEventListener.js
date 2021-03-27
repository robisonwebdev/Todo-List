import clearItemsContainer from "./clearItemsContainer";
import projectTodoList from "./projectTodoList";

function projectEventListener(target, project) {
    target.addEventListener('click', () => {
        clearItemsContainer();
        projectTodoList(project);
    })
}

export default projectEventListener;