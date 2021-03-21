import projects from './projects';

class project {
    constructor(title, dataKey) {
        this.title = title;
        this.dataKey = dataKey;
    }
}

function addProject(title, dataKey) {
    const newProject = new project(title, dataKey);

    projects.push(newProject);
}

export default addProject;