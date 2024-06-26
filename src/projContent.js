import { renderProjects, deleteProject } from './index.js';

export default function projectContent(projects) {
    const container = document.createElement('div');
    // const newProjBtn = document.createElement('button');
    // newProjBtn.textContent = '+ New Project'
    // container.appendChild(newProjBtn);

    // Create h2, give it the project name, and append it to the content div
    projects.forEach(project => {
        const h2 = document.createElement('h2');
        h2.textContent = project.name;
        container.appendChild(h2);

        // Display title and dueDate for the todoItems for each project
        project.todoItems.forEach(item => {
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const h4 = document.createElement('h4');

            h3.textContent = item.title;
            h4.textContent = item.dueDate;

            div.appendChild(h3);
            div.appendChild(h4);

            container.appendChild(div);
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        container.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            deleteProject(project);
            renderProjects();
        });
    });
    return container;
};