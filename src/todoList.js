import todoListProjectName from "./todoListProjectName";

function projectTodoList(project) {
    const itemsContainer = document.querySelector('#itemsContainer');
    const todoList = document.createElement('div');
    const todoListHeader = document.createElement('div');

    todoList.setAttribute('id', 'todoList');
    todoListHeader.setAttribute('id', 'todoListHeader');
    
    todoListHeader.appendChild(todoListProjectName(project['name']));

    todoList.appendChild(todoListHeader);
    itemsContainer.appendChild(todoList);

    // todoList.appendChild();

    // for (let i = 0; i < project['todo'].length; i++) {
    //     const para = document.createElement('p');
        
    //     para.innerText = project['todo'][i];

    //     itemsContainer.appendChild(para);
    // }

    // return itemsContainer;
}

export default projectTodoList;