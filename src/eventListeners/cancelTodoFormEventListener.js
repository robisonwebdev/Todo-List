import changeDisplay from "../changeDisplay";
import removeTodoForm from "../removeTodoForm";

function cancelTodoFormEventListener(target) {

    target.addEventListener('click', () => {
        changeDisplay('#addTodoItemBtn', true);
        removeTodoForm();
    })
}

export default cancelTodoFormEventListener;