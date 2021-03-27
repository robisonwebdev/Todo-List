import clearItemsContainer from "./clearItemsContainer";
import todoList from "./todoList";

function projectEventListener(target, project) {
    target.addEventListener('click', () => {
        clearItemsContainer();
        todoList(project);
    })
}

export default projectEventListener;