import removeProjectForm from './removeProjectForm';

function cancelBtnEventListener(target) {
    target.addEventListener('click', () => {
        removeProjectForm();
    })
}

export default cancelBtnEventListener;