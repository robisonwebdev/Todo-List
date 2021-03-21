import projects from './projects';
import project from './projectClass';

function addProject() {
    const title = document.querySelector('#projectTitle').value;
    const dataKey = `${title}_${Math.floor((Math.random() * 100000) + 1)}`;

    const newProject = new project(title, dataKey);

    projects.push(newProject);
}

export default addProject;