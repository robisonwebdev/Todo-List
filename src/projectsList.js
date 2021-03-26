import projects from './projects';
import delBtnEventListener from './delBtnEventListener';

function projectsList() {
    const projectsList = document.createElement('div');
    const projectsHeader = document.createElement('h2');    

    projectsList.setAttribute('id', 'projects');
    projectsHeader.setAttribute('id', 'projectsHeader');

    projectsHeader.innerText = 'Projects';

    projectsList.appendChild(projectsHeader);

    projects.forEach((project) => {
        const projectItems = document.createElement('div');
        const projectItemsLeft = document.createElement('div');
        const projectItemsRight = document.createElement('div');
        const projectTitle = document.createElement('h4');
        const projectIcon = document.createElement('i');
        const projectDeleteBtn = document.createElement('i');

        projectItems.setAttribute('class', 'projectItems')
        projectItemsLeft.setAttribute('class', 'projectItemsLeft');
        projectItemsRight.setAttribute('class', 'projectItemsRight');
        projectTitle.setAttribute('class', 'projectTitle');
        projectIcon.setAttribute('class', 'las la-tasks');
        projectDeleteBtn.setAttribute('class', 'las la-trash');

        projectTitle.innerText = project['name'];

        delBtnEventListener(projectDeleteBtn, project);

        projectItemsLeft.appendChild(projectIcon);
        projectItemsLeft.appendChild(projectTitle);
        projectItemsRight.appendChild(projectDeleteBtn);
        projectItems.appendChild(projectItemsLeft);
        projectItems.appendChild(projectItemsRight);
        projectsList.appendChild(projectItems);
    })

    return projectsList;
}

export default projectsList;