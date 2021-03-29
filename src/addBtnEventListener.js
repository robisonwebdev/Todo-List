// Event listener to add project

import addProject from "./addProject";
import refreshProjectsContainer from './refreshProjectsContainer';

function addBtnEventLinstener(target) {
    target.addEventListener('click', () => {
        const inputValue = document.querySelector('#projectName').value;

        if (inputValue !== '') {
            addProject(inputValue);
            refreshProjectsContainer();
        }
    })
}

export default addBtnEventLinstener;