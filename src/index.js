
import './styles/style.css';
import { ToDoItem, Project, ToDoListApp } from './classes.js';

// Factory Functions - clean way to create instances of objects
    // for example when accepting user input, write: document.getElementById('todoForm').addEventListener('submit', function(event) { event.preventDefault();...
    // const title = document.getElementById('title').value;
    // const description = document.getElementById('description').value;
    // const dueDate = document.getElementById('dueDate').value;
    // const priority = document.getElementById('priority').value;
    // then run the func: createToDoItem(title, description, dueDate, priority); <-- looks a little different than this example
    // console.log(todoItem);
function createTodoItem(title, description, dueDate, priority, notes = [], checklist = []) {
    return new ToDoItem(title, description, dueDate, priority, notes, checklist);
}

function createProject(name) {
    return new Project(name);
}

// module.exports = { ToDoItem, Project, ToDoListApp }; // Exported for Jest testing purposes (at least... maybe other purposes too)

import itemsContent from "./itemContent";
import projectContent from './projContent.js';
import addProjectClickListener from './projClickListener.js';


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content'); // Get the content div
    const task1 = createTodoItem("Mow Lawn", "Time to mow the lawn", "Today", "High", ["Don't forget to wear sunscreen"], ["Wear sunscreen", "Mow the lawn"]) 
    const task2 = createTodoItem("Scratch cat", "Let's scratch the cat", "Today", "High", ["Don't forget to feed the cat"], ["Feed the cat"])
    
    content.appendChild(itemsContent([task1, task2]));

    // Test ToDoListApp & Populating Projects
    const project1 = createProject("Home");
    const project2 = createProject("Work"); // Use factory function to create new project instances named Home and Work
    project1.todoItems.push(task1); // Giving project1 ownership of task1
    project2.todoItems.push(task2); // Giving project2 ownership of task2
    console.log(project1); // Successfully added task1 to project1

    const todoListApp = new ToDoListApp();
    todoListApp.addExistingProject(project1); 
    todoListApp.addExistingProject(project2);
    console.log(todoListApp);

    const navItems = document.querySelectorAll('nav button');
    navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            content.innerHTML = '';

            if (e.target.textContent === 'Projects') {
                content.appendChild(projectContent(todoListApp.projects)); // Display all projects
                addProjectClickListener(todoListApp, content); // Add event listener to each project name to display project's todoItems
            } else if (e.target.textContent === '???') {
                return
            } else if (e.target.textContent === 'Show All To Do Items') {
                content.appendChild(itemsContent([task1, task2]));
            }
        });
    });
});