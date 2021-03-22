import projects from './projects';

function projectsList() {
    const projectsList = document.createElement('div');
    const projectsHeader = document.createElement('h2');    

    projectsList.setAttribute('id', 'projects');
    projectsHeader.setAttribute('id', 'projectsHeader');

    projectsHeader.innerText = 'Projects';

    projectsList.appendChild(projectsHeader);

    projects.forEach((project) => {
        const projectItem = document.createElement('div');
        const projectTitle = document.createElement('h4');
        const projectIcon = document.createElement('i');

        projectItem.setAttribute('class', 'projectItem')
        projectTitle.setAttribute('class', 'projectTitle');
        projectIcon.setAttribute('class', 'las la-tasks');

        projectTitle.innerText = project['name'];

        projectItem.appendChild(projectIcon);
        projectItem.appendChild(projectTitle);
        projectsList.appendChild(projectItem);
    })

    return projectsList;
}

export default projectsList;