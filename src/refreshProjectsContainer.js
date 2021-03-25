import allProjects from "./allProjects";
import projectsList from "./projectsList";
import removeProjectsContainerChildren from "./removeProjectsContainerChildren";

function refreshProjectsContainer() {
    removeProjectsContainerChildren();

    const projectsContainer = document.querySelector('#projectsContainer');

    projectsContainer.appendChild(allProjects());
    projectsContainer.appendChild(projectsList());

    return projectsContainer;
}

export default refreshProjectsContainer;