import addProjectForm from './addProjectForm';

function addProjectBtn() {
    const addProjectBtn = document.createElement('div');
    const addProjectIcon = document.createElement('i');
    const addProjectText = document.createElement('p');

    addProjectBtn.setAttribute('id', 'addProjectBtn');
    addProjectIcon.setAttribute('class', 'las la-plus');
    addProjectText.setAttribute('id', 'addProjectText');

    addProjectText.innerText = 'Add Project';

    addProjectBtn.appendChild(addProjectIcon);
    addProjectBtn.appendChild(addProjectText);

    addProjectBtn.addEventListener('click', () => {
        addProjectForm();
    })

    return addProjectBtn
}

export default addProjectBtn;