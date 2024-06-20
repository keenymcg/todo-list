// Purpose: Add an event listener to each project in the projects list that displays the todoItems for the project that was clicked

import itemsContent from "./itemContent";

export default function addProjectClickListener(todoListApp, content) {
    const projectsList = document.querySelectorAll('h2'); // Get all h2 elements
    projectsList.forEach((project) => { // Loop through each h2 element
        project.addEventListener('click', (e) => { // Add an event listener to each h2 element
            console.log("You clicked"); // Success
            content.innerHTML = ''; 
            const projectIndex = todoListApp.projects.findIndex(project => project.name === e.target.textContent); // Find the index of the project that matches the h2 element's text content
            // console.log(itemsContent(todoListApp.projects[projectIndex].todoItems)); // Success
            content.appendChild(itemsContent(todoListApp.projects[projectIndex].todoItems)); // Display the todoItems for the project that was clicked
        })
    })
};