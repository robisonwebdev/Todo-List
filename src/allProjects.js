function allProjects() {
    const allProjects = document.createElement('div');
    const allProjectsIcon = document.createElement('i');
    const allProjectsTitle = document.createElement('p');

    allProjects.setAttribute('id', 'allProjects');
    allProjectsIcon.setAttribute('class', 'las la-inbox');
    allProjectsTitle.setAttribute('id', 'allProjectsTitle');

    allProjectsTitle.innerText = 'All Projects';

    allProjects.appendChild(allProjectsIcon);
    allProjects.appendChild(allProjectsTitle);

    return allProjects;
}

export default allProjects;