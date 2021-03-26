import deleteProject from './deleteProject';
import refreshProjectsContainer from './refreshProjectsContainer';

function delBtnEventListener(target, project) {
    target.addEventListener('click', () => {
        deleteProject(project['dataKey']);
        refreshProjectsContainer();
    })
}

export default delBtnEventListener;