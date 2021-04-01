import findProject from "./findProject";

function deleteItem(dataKey, todo) {
    let project = findProject(dataKey);

    for (let i = 0; i < project['todo'].length; i++) {

        if (todo === project['todo'][i]) {
            project['todo'].splice(i, 1);
        }

    }
}

export default deleteItem;