import addBtnEventListener from './eventListeners/addBtnEventListener';
import cancelBtnEventListener from "./cancelBtnEventListener";

function addProjectForm() {
    const projectsContainer = document.querySelector('#projectsContainer');
    const addProjectForm = document.createElement('div');
    const inputDiv = document.createElement('div');
    const btnsDiv = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    addProjectForm.setAttribute('id', 'addProjectForm');
    label.setAttribute('for', 'projectName');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'projectName');
    input.setAttribute('name', 'projectName');
    addBtn.setAttribute('type', 'button');
    addBtn.setAttribute('class', 'addProjectFormBtns');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'addProjectFormBtns');
    cancelBtn.setAttribute('id', 'cancelBtn');

    addBtn.innerText = 'Add';
    cancelBtn.innerText = 'Cancel';

    addBtnEventListener(addBtn);
    cancelBtnEventListener(cancelBtn);

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);
    btnsDiv.appendChild(addBtn);
    btnsDiv.appendChild(cancelBtn);
    addProjectForm.appendChild(inputDiv);
    addProjectForm.appendChild(btnsDiv);
    projectsContainer.appendChild(addProjectForm);

    return projectsContainer;
}

export default addProjectForm;