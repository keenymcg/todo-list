// import { Project } from './classes.js';
import { renderProjects } from './index.js';

function projectAdd(todoListApp) {
    const container = document.createElement('div');

    // Create input field for project name, and use that to create an instance of Project, then add it to the ToDoListApp, then append it to the content div
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Project Name';
    container.appendChild(input);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        const projectName = input.value;
        todoListApp.addProject(projectName);
        // console.log(todoListApp.projects); // Call renderProjects from Index.js to update the UI
        renderProjects();
    });
    container.appendChild(submit);  

    return container;
}

export default projectAdd;