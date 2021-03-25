import projects from './projects';
import project from './projectClass';

function addProject(name) {
    const dataKey = `${name}_${Math.floor((Math.random() * 100000) + 1)}`;

    const newProject = new project(name, dataKey);

    projects.push(newProject);
}

export default addProject;