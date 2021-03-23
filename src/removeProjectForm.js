function removeProjectForm() {
    const projectContainer = document.querySelector('#projectsContainer');
    const addProjectForm = document.querySelector('#addProjectForm');

    projectContainer.removeChild(addProjectForm);

    return projectContainer;
}

export default removeProjectForm;