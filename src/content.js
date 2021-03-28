import projectsContainer from './projectsContainer';
import todoContainer from './todoContainer';

function content() {
    const content = document.createElement('div');

    content.setAttribute('id', 'content');

    content.appendChild(projectsContainer());
    content.appendChild(todoContainer());

    return content
}

export default content;