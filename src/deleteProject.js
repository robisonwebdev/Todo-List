import projects from "./projects";

function deleteProject(dataKey) {
    for (let i = 0; i < projects.length; i++) {
        if (dataKey === projects[i]['dataKey']) {
            projects.splice(i, 1);
        }
    }
}

export default deleteProject;