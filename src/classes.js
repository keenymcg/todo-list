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

    // remove all ToDoItems from a project
    removeAllTodos() {
        this.todoItems = [];
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

export { ToDoItem, Project, ToDoListApp };