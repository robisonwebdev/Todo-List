import header from './header';
import content from './content';
import footer from './footer';
import addProjectBtn from './addProjectBtn';
import addProjectForm from './addProjectForm';
import removeProjectForm from './removeProjectForm';

// import projects from './projects';
// import addProject from './addProject';
// import projectsList from './projectsList';

const container = document.querySelector('#container');

// projectsList();

container.appendChild(header('las la-list-ul', 'Todo List'));
container.appendChild(content());
container.appendChild(footer('Developed by ', 'David Robison', 'https://github.com/robisonwebdev'));