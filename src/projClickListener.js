// Purpose: Add an event listener to each project in the projects list that displays the todoItems for the project that was clicked

import { itemsContent } from "./itemContent";
import { hideShowTodoItemsBtn, navButtonSwitch, showProjBtn, showProjectH2, toDoItemAdd } from "./projectUI";

export default function addProjectClickListener(todoListApp, content) {
    const projectNames = document.querySelectorAll('h2'); // Get all h2 elements
    projectNames.forEach((projectName) => { // Loop through each h2 element
        projectName.addEventListener('click', (e) => { // Add an event listener to each h2 element
            console.log("You clicked on a project."); // Log success

            hideShowTodoItemsBtn(); // Hide the "Show All To Do Items" button
            navButtonSwitch('+ New To Do Item'); // Switch the navbar button text

            const clickedProjectName = e.target.textContent; // Get the text content of the clicked h2 element
            const clickedProject = todoListApp.projects.find(project => project.name === clickedProjectName); // Find the project instance with the same name

            if (clickedProject) { // If a matching project is found
                content.innerHTML = ''; 
                content.appendChild(itemsContent([clickedProject])); // Display the todoItems for the found project
            } else {
                console.error("Project not found."); // Error handling if no matching project is found
            }

            showProjectH2(clickedProjectName); // Show the project name in the header
            showProjBtn(); // Show the projects button
            toDoItemAdd(clickedProject);
        })
    })
};