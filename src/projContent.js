import { renderProjects, deleteProject } from './index.js';
import { format } from 'date-fns';

export default function projectContent(projects) {
    const container = document.createElement('div');
    container.id = 'project-content';

    // Create h2, give it the project name, and append it to the content div
    projects.forEach(project => {
        const projectHeader = document.createElement('div');
        projectHeader.style.display = 'flex';
        projectHeader.style.justifyContent = 'space-between';
        projectHeader.style.alignItems = 'baseline';
        
        const h2 = document.createElement('h2');
        h2.textContent = project.name;
        projectHeader.appendChild(h2);

        // Display delete button for each project
        const deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete-project';
        deleteBtn.textContent = 'x';
        projectHeader.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            deleteProject(project);
            renderProjects();
        });

        container.appendChild(projectHeader);

        // Display title of the todoItems for each project in comma-separated list on one line
        const todoItemTitles = project.todoItems.map(item => item.title).join(', ');
        const p = document.createElement('p');
        p.textContent = todoItemTitles;
        container.appendChild(p);
    });
    return container;
};