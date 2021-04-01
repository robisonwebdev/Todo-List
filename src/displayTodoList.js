import checkboxEventListener from "./checkboxEventListener";

function displayTodoList(project) {
    const ul = document.createElement('ul');

    for (let i = 0; i < project['todo'].length; i++) {
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const li = document.createElement('li');

        item.setAttribute('class', 'item');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('dataKey', `${project['dataKey']}`);
        checkbox.setAttribute('name', `${project['dataKey']}_${project['todo'][i]}`);
        label.setAttribute('for', `${project['dataKey']}_${project['todo'][i]}`);

        label.innerText = project['todo'][i];

        checkboxEventListener(checkbox, label.innerText);

        item.appendChild(checkbox);
        item.appendChild(label);
        li.appendChild(item);
        ul.appendChild(li);
    }

    return ul;
}

export default displayTodoList;