import projectsContainer from './projectsContainer';
import itemsContainer from './itemsContainer';

function content() {
    const content = document.createElement('div');

    content.setAttribute('id', 'content');

    content.appendChild(projectsContainer());
    content.appendChild(itemsContainer());

    return content
}

export default content;