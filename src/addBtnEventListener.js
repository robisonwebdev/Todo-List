import addProject from "./addProject";
import projects from "./projects";

function addBtnEventLinstener(target) {
    target.addEventListener('click', () => {
        const inputValue = document.querySelector('#projectName').value;

        addProject(inputValue);
    })
}

export default addBtnEventLinstener;