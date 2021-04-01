import displayTodoForm from '../displayTodoForm';
import changeDisplay from '../changeDisplay';

function addItemBtnEventListener(target) {
    target.addEventListener('click', () => {
        changeDisplay(`#${target.id}`, false);
        displayTodoForm();
    })
}

export default addItemBtnEventListener;