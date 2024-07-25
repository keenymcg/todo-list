import { format } from 'date-fns';
import './styles/style.scss';
import { ToDoItem, Project, ToDoListApp } from './classes.js';

const todoListApp = new ToDoListApp(); // create our ToDoListApp instance
const content = document.getElementById('content'); // Grab/Define the content div for global use

// LOCAL STORAGE FUNCTIONS
export function saveProjToLocalStorage(projectInstance) {
    // Retrieve existing projects from local storage
    const existingData = localStorage.getItem('todoListApp');
    console.log(existingData);
    let projects = existingData ? JSON.parse(existingData) : [];

    // Add the new project to the list
    projects.push(projectInstance);
    console.log(projects);

    // Save the updated list back to local storage
    const data = JSON.stringify(projects);
    console.log(data);
    localStorage.setItem('todoListApp', data);
};

export function saveItemToLocalStorage(projectName, todoItem) {
    // Retrieve existing projects from local storage
    const existingData = localStorage.getItem('todoListApp');
    let projects = JSON.parse(existingData);

    // Find the localStorage project instance that matches the project name from the projectName parameter and push the todoItem to its todoItems array
    const currentProject = projects.find(proj => proj.name === projectName); // Find the localStorage project instance with the same name
    currentProject.todoItems.push(todoItem);
    // console.log(currentProject);

    // Save the updated list back to local storage
    const data = JSON.stringify(projects);
    localStorage.setItem('todoListApp', data);
};

export function loadFromLocalStorage(todoListApp) {
    const data = localStorage.getItem('todoListApp');

    if (data) {
        const projects = JSON.parse(data);

        projects.forEach(project => {
            todoListApp.addProject(project.name);

            const currentProject = todoListApp.projects.find(proj => proj.name === project.name); // Find the project instance with the same name
            project.todoItems.forEach(item => {
                const todoItem = createTodoItem(item.title, item.description, item.dueDate, item.priority);
                currentProject.addTodo(todoItem);
            });
        });
        console.log(todoListApp);
    };
};

// ISSUE: Move renderProjects to ProjectUI or ProjContent? Maybe doesn't belong here since it's about UI
export function renderProjects() {
    content.innerHTML = ''; // Clear existing projects
    content.appendChild(projectContent(todoListApp.projects)); // Append updated list
};

// ISSUE: Move renderItems to ProjectUI or ItemContent? Maybe doesn't belong here
export function renderItems(project) {
    content.innerHTML = '';
    content.appendChild(itemsContent([project]));
};

// ISSUE: Move deleteProject to ProjectUI or ProjContent? Maybe doesn't belong here since it's about modifying data
export function deleteProject(project) {
    todoListApp.removeProject(project);
    project.removeAllTodos();
    console.log(project);
    
    // remove this project from local storage. ISSUE: Adhere to SOLID principles and separate this out into a separate function?
    const data = localStorage.getItem('todoListApp');
    const projects = JSON.parse(data);
    const updatedProjects = projects.filter(proj => proj.name !== project.name);
    localStorage.setItem('todoListApp', JSON.stringify(updatedProjects));

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
    
    // localStorage.clear(); // Clear local storage for testing
    loadFromLocalStorage(todoListApp); // Load any existing projects from local storage

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

