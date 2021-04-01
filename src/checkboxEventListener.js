import deleteItem from "./deleteItem";
import clearTodoContainer from './clearTodoContainer';
import todoList from './todoList';
import findProject from './findProject';

function checkboxEventListener(target, todo) {
    target.addEventListener('click', () => {
        deleteItem(target.getAttribute('dataKey'), todo);
        clearTodoContainer();
        todoList(findProject(target.getAttribute('dataKey')));
    })
}

export default checkboxEventListener;