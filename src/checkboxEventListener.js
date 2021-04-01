import deleteItem from "./deleteItem";
import clearTodoContainer from './clearTodoContainer';
import todoList from './todoList';
import findProject from './findProject';
import allTodos from "./allTodos";

function checkboxEventListener(target, todo) {
    
    target.addEventListener('click', () => {
        const getHeaderData = document.querySelector('#todoHeader').getAttribute('dataKey');
        
        deleteItem(target.getAttribute('dataKey'), todo);
        clearTodoContainer();

        if (getHeaderData === 'all_Projects') {
            allTodos();
        } else {
            todoList(findProject(target.getAttribute('dataKey')));
        }
    })
}

export default checkboxEventListener;