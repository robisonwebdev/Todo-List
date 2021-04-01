import projects from "./projects";

function deleteItem(dataKey, todo) {
    for (let i = 0; i < projects.length; i++) {

        if (dataKey === projects[i]['dataKey']) {

            for (let j = 0; j < projects[i]['todo'].length; j++) {

                if (todo === projects[i]['todo'][j]) {
                    projects[i]['todo'].splice(j, 1);
                }
                
            }

        }

    }

}

export default deleteItem;