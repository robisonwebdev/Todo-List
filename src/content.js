import projects from './projects';
import list from './list';

function content() {
    const content = document.createElement('div');

    content.setAttribute('id', 'content');

    content.appendChild(projects());
    content.appendChild(list());

    return content
}

export default content;