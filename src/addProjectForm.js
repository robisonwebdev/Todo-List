import addBtnEventListener from './eventListeners/addBtnEventListener';
import cancelBtnEventListener from './eventListeners/cancelBtnEventListener';

function addProjectForm() {
    const projectsContainer = document.querySelector('#projectsContainer');
    const addProjectForm = document.createElement('div');
    const inputDiv = document.createElement('div');
    const btnsDiv = document.createElement('div');
    const input = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    addProjectForm.setAttribute('id', 'addProjectForm');
    inputDiv.setAttribute('id', 'projectNameDiv');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'projectName');
    input.setAttribute('placeholder', 'Project Name');
    input.setAttribute('name', 'projectName');
    btnsDiv.setAttribute('id', 'projectFormBtnsDiv');
    addBtn.setAttribute('type', 'button');
    addBtn.setAttribute('class', 'addProjectFormBtns');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'addProjectFormBtns');
    cancelBtn.setAttribute('id', 'cancelBtn');

    addBtn.innerText = 'Add';
    cancelBtn.innerText = 'Cancel';

    addBtnEventListener(addBtn);
    cancelBtnEventListener(cancelBtn);

    inputDiv.appendChild(input);
    btnsDiv.appendChild(addBtn);
    btnsDiv.appendChild(cancelBtn);
    addProjectForm.appendChild(inputDiv);
    addProjectForm.appendChild(btnsDiv);
    projectsContainer.appendChild(addProjectForm);

    return projectsContainer;
}

export default addProjectForm;