import allTodos from "./allTodos";

function allProjectsEventListener(target) {
    target.addEventListener('click', () => {
        allTodos();
    })
}

export default allProjectsEventListener;