function projectHeader(name) {
    const projectHeader = document.createElement('h2');

    projectHeader.setAttribute('class', 'todoListProjectName');

    projectHeader.innerText = name;

    return projectHeader;
}

export default projectHeader;