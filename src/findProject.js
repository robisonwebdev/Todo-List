import projects from "./projects";

function findProject(dataKey) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i]['dataKey'] === dataKey) {
            return projects[i];
        }
    }
}

export default findProject;