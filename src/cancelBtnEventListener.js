import changeDisplay from './changeDisplay';
import removeProjectForm from './removeProjectForm';

function cancelBtnEventListener(target) {
    target.addEventListener('click', () => {
        removeProjectForm();
        changeDisplay('#addProjectBtn', true);
    })
}

export default cancelBtnEventListener;