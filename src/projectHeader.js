function projectHeader(name) {
    const projectHeader = document.createElement('h2');

    projectHeader.setAttribute('id', 'projectHeader');

    projectHeader.innerText = name;

    return projectHeader;
}

export default projectHeader;