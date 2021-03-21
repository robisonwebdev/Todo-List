import projectsContainer from './projectsContainer';
import itemContainer from './itemsContainer';

function content() {
    const content = document.createElement('div');

    content.setAttribute('id', 'content');

    content.appendChild(projectsContainer());
    content.appendChild(itemContainer());

    return content
}

export default content;