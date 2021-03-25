import addProject from "./addProject";
import projects from "./projects";
import removeProjectForm from "./removeProjectForm";

function addBtnEventLinstener(target) {
    target.addEventListener('click', () => {
        const inputValue = document.querySelector('#projectName').value;

        addProject(inputValue);
        removeProjectForm();
    })
}

export default addBtnEventLinstener;