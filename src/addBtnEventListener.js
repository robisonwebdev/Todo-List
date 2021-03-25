import addProject from "./addProject";
import projects from "./projects";
import projectsList from "./projectsList";
import removeProjectForm from "./removeProjectForm";
import refreshProjectsContainer from './refreshProjectsContainer';

function addBtnEventLinstener(target) {
    target.addEventListener('click', () => {
        const inputValue = document.querySelector('#projectName').value;

        addProject(inputValue);
        removeProjectForm();
        refreshProjectsContainer();
    })
}

export default addBtnEventLinstener;