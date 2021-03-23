import addProject from './addProject';
import addProjectBtn from './addProjectBtn';
import projectsList from './projectsList';
import allProjects from './allProjects';

function projectsContainer() {
    const projectsContainer = document.createElement('div');

    projectsContainer.setAttribute('id', 'projectsContainer');

    projectsContainer.appendChild(allProjects());
    projectsContainer.appendChild(projectsList());
    projectsContainer.appendChild(addProjectBtn());

    return projectsContainer;
}

export default projectsContainer;