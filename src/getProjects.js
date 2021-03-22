import projects from './projects';

function getProjects(prop) {
    projects.forEach((project) => {
        prop ? console.log(project[prop]) : console.log(project);
    })
}

export default getProjects;