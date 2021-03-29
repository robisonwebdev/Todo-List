import addTodoItemForm from './addTodoItemForm';
import changeDisplay from './changeDisplay';

function addItemBtnEventListener(target) {
    target.addEventListener('click', () => {
        changeDisplay(`#${target.id}`, false);
        addTodoItemForm();
    })
}

export default addItemBtnEventListener;