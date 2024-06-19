
export default function projectContent(projects) {
    
    const container = document.createElement('div');

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

            div.style.border = '1px solid black'; // Add border style

            container.appendChild(div);
        })
    });
    return container;
};