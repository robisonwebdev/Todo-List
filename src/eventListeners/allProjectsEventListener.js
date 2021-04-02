import allTodos from "../allTodos";
import clearTodoContainer from '../clearTodoContainer';

function allProjectsEventListener(target) {
    target.addEventListener('click', () => {
        clearTodoContainer();
        allTodos();
    })
}

export default allProjectsEventListener;