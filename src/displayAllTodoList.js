import checkboxEventListener from "./checkboxEventListener";
import projects from "./projects";

function displayAllTodoList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    for (let i = 0; i < projects.length; i++) {
        for (let j = 0; j < projects[i]['todo'].length; j++) {
            const item = document.createElement('div');
            const checkbox = document.createElement('input');
            const label = document.createElement('label');            

            item.setAttribute('class', 'item');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('dataKey', `${projects[i]['dataKey']}`);
            checkbox.setAttribute('name', `${projects[i]['dataKey']}_${projects[i]['todo'][j]}`);
            label.setAttribute('for', `${projects[i]['dataKey']}_${projects[i]['todo'][j]}`);

            label.innerText = projects[i]['todo'][j];

            checkboxEventListener(checkbox, label.innerText);

            item.appendChild(checkbox);
            item.appendChild(label);
            li.appendChild(item);
        }
    }

    ul.appendChild(li);

    return ul;
}

export default displayAllTodoList;