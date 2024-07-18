import { format } from 'date-fns';
import './styles/style.scss';
import { ToDoItem, Project, ToDoListApp } from './classes.js';

const todoListApp = new ToDoListApp(); // create our ToDoListApp instance
const content = document.getElementById('content'); // Get the content div

// LOCAL STORAGE FUNCTIONS
export function saveToLocalStorage(todoListApp) {
    const data = JSON.stringify(todoListApp.projects);
    localStorage.setItem('todoListApp', data);
};

export function loadFromLocalStorage(todoListApp) {
    const data = localStorage.getItem('todoListApp');
    if (data) {
        const projects = JSON.parse(data);
        projects.forEach(projectData => {
            const project = new Project(projectData.name);
            projectData.todoItems.forEach(itemData => {
                const todoItem = createTodoItem(itemData.title, itemData.description, itemData.dueDate, itemData.priority);
                project.addTodo(todoItem);
            });
            todoListApp.addProject(project);
        });
    }
};

// ISSUE: Move renderItems to ProjectUI or ItemContent? Maybe doesn't belong here
export function renderItems(project) {
    content.innerHTML = '';
    content.appendChild(itemsContent([project]));
};

// ISSUE: Move renderProjects to ProjectUI or ProjContent? Maybe doesn't belong here since it's about UI
export function renderProjects() {
    content.innerHTML = ''; // Clear existing projects
    content.appendChild(projectContent(todoListApp.projects)); // Append updated list
};

// ISSUE: Move deleteProject to ProjectUI or ProjContent? Maybe doesn't belong here since it's about modifying data
export function deleteProject(project) {
    todoListApp.removeProject(project);
    project.removeAllTodos();
    console.log(project);
    renderProjects();
};

// Factory Functions - clean way to create instances of objects
export function createTodoItem(title, description, dueDate, priority, notes = [], checklist = []) {
    return new ToDoItem(title, description, dueDate, priority, notes, checklist);
};

function createProject(name) {
    return new Project(name);
};

// module.exports = { ToDoItem, Project, ToDoListApp }; // Exported for Jest testing purposes (at least... maybe other purposes too)

import { itemsContent } from "./itemContent";
import projectContent from './projContent.js';
import addProjectClickListener from './projClickListener.js';
import { projectAdd, navButtonSwitch, hideAddBtn, showAddBtn } from "./projectUI.js";


document.addEventListener('DOMContentLoaded', () => {

    loadFromLocalStorage(todoListApp); // Load any existing projects from local storage

    // SEEDING DATA FOR TESTING
    const date = new Date(2024, 5, 27);
    const formattedDate = format(date, 'MMMM d, yyyy');
    const task1 = createTodoItem("Mow Lawn", "Time to mow the lawn", formattedDate, "High", ["Don't forget to wear sunscreen"], ["Wear sunscreen", "Mow the lawn"]) 
    const task2 = createTodoItem("Scratch cat", "Let's scratch the cat", formattedDate, "High", ["Don't forget to feed the cat"], ["Feed the cat"])

    // Test ToDoListApp & Populating Projects
    const project1 = createProject("Home");
    const project2 = createProject("Work"); // Use factory function to create new project instances named Home and Work
    project1.todoItems.push(task1); // Giving project1 ownership of task1
    project2.todoItems.push(task2); // Giving project2 ownership of task2
    // console.log(project1); // Successfully added task1 to project1
    todoListApp.addExistingProject(project1); 
    todoListApp.addExistingProject(project2);

    renderProjects(); // INITIAL PAGE SHOWS LIST OF PROJECTS
    addProjectClickListener(todoListApp, content); // Add event listener to each project name to display project's todoItems
    
    const navItems = document.querySelectorAll('nav button');
    const projAdd = document.getElementById('projAdd')
    navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target.textContent === 'Projects') {
                content.innerHTML = '';
                content.appendChild(projectContent(todoListApp.projects)); // Display all projects
                showAddBtn(); // Show the add button if it was hidden by the Show All To Do Items button
                navButtonSwitch('+ New Project');

                // Remove existing event listeners from the '+ New Project' button by cloning it
                const oldAddBtn = document.getElementById('projAdd');
                const newAddBtn = oldAddBtn.cloneNode(true);
                oldAddBtn.parentNode.replaceChild(newAddBtn, oldAddBtn);

                let formAdded = false; // Flag to track if the form has been added

                // Add the correct event listener to the new '+ New Project' button
                newAddBtn.addEventListener('click', () => {
                    if (!formAdded) { // Check if the form has not been added
                        const formContainer = projectAdd(todoListApp); // Assuming projectAdd returns the form element for adding a new project
                        newAddBtn.appendChild(formContainer); // Display the form for adding a new project
                        formAdded = true; // Set the flag to true to prevent further additions
                    }
                });

                addProjectClickListener(todoListApp, content);
            } else if (e.target.textContent === 'Show All To Do Items') {
                content.innerHTML = '';
                hideAddBtn(); // Because we can't add a new ToDoItem from this view
                content.appendChild(itemsContent(todoListApp.projects));
            } else if (e.target.textContent === '+ New Project') {
                console.log('New Project Button Clicked');
                projAdd.appendChild(projectAdd(todoListApp));
            }
        });
    });
});

