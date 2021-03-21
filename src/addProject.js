import projects from './projects';
import project from './projectClass';

function addProject(title, dataKey) {
    const newProject = new project(title, dataKey);

    projects.push(newProject);
}

export default addProject;