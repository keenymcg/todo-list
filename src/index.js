console.log('Hello, world!')

class ToDoItem {
    constructor(title, description, dueDate, priority, notes = [], checklist = [], completed = false) {
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = completed;
    }

    editTodo(newTitle, newDescription, newDueDate, newPriority) {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }

    markAsComplete() {
        this.completed = true;
    }

    // NOTE differs from Description. Note is like a comment on the specific Item.
    addNote(note) {
        this.notes.push(note);
    }

    // CHECKLIST 
    addChecklistItem(item) {
        this.checklist.push(item);
    }

    removeChecklistItem(index) {
        this.checklist.splice(index, 1);
    }
};

class Project {
    constructor(name) {
        this.name = name;
        this.todoItems = [];
    }

    addTodo(todoItem) {
        this.todoItems.push(todoItem);
    }

    removeTodo(index) {
        this.todoItems.splice(index, 1);
    }

    editProject(newName) {
        this.name = newName;
    }
};

// Test Project Class
    // const project1 = new Project("Home")
    // const project2 = new Project("Work")
    // console.log(`Project Class Test "${project1.name}" is the name.`)

    // // Generate HTML Projects
    // function generateProjects(projects) {
    //     let projectList = document.getElementById('project-list');

    //     projects.forEach(project => {
    //         const h2 = document.createElement('h2');

    //         h2.textContent = project.name;

    //         projectList.appendChild(h2);
    //     })
    // };

    // generateProjects([project1, project2]);

////////////

class ToDoListApp {
    constructor() {
        this.projects = [];
        // this.addProject('Default');
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
    }

    addExistingProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    getProject(index) {
        return this.projects[index];
    }
};

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


////////////

import itemsContent from "./itemContent";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const task1 = createTodoItem("Mow Lawn", "Time to mow the lawn", "Today", "High", ["Don't forget to wear sunscreen"], ["Wear sunscreen", "Mow the lawn"]) 
    const task2 = createTodoItem("Scratch cat", "Let's scratch the cat", "Today", "High", ["Don't forget to feed the cat"], ["Feed the cat"])
    
    content.appendChild(itemsContent([task1, task2]));

    // Test ToDoListApp & Populating Projects
    const project1 = createProject("Home");
    const project2 = createProject("Work");
    project1.todoItems.push(task1); // Giving project1 ownership of task1
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
                // content.appendChild(itemsContent(project1.todoItems));
                // Display all the project names from the todoListApp
                todoListApp.projects.forEach(project => {
                    const h2 = document.createElement('h2');
                    h2.textContent = project.name;
                    content.appendChild(h2);
                })
                const projectsList = document.querySelectorAll('h2');
                projectsList.forEach((project) => {
                    project.addEventListener('click', (e) => {
                        console.log("You clicked"); // Success
                        content.innerHTML = '';
                        const projectIndex = todoListApp.projects.findIndex(project => project.name === e.target.textContent);
                        // console.log(itemsContent(todoListApp.projects[projectIndex].todoItems));
                        content.appendChild(itemsContent(todoListApp.projects[projectIndex].todoItems));
        })
    })
            } else if (e.target.textContent === '???') {
                return
            } else if (e.target.textContent === '??????') {
                return
            }
        });
    });

    const projectsList = document.querySelectorAll('h2');
    projectsList.forEach((project) => {
        project.addEventListener('click', (e) => {
            console.log("You clicked");
            content.innerHTML = '';
            const projectIndex = todoListApp.projects.findIndex(project => project.name === e.target.textContent);
            console.log(itemsContent(todoListApp.projects[projectIndex].todoItems));
            // content.appendChild(itemsContent(todoListApp.projects[projectIndex].todoItems));
        })
    })
});