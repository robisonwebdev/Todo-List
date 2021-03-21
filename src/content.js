import projectsContainer from './projectsContainer';
import list from './list';

function content() {
    const content = document.createElement('div');

    content.setAttribute('id', 'content');

    content.appendChild(projectsContainer());
    content.appendChild(list());

    return content
}

export default content;