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

window.task1 = new ToDoItem("Mow Lawn", "Time to mow the lawn bitch", null, null, null, null) 

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
}

class ToDoListApp {
    constructor() {
        this.projects = [];
        this.addProject('Default');
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    getProject(index) {
        return this.projects[index];
    }
}

// Factory Functions
function createTodoItem(title, description, dueDate, priority, notes = [], checklist = []) {
    return new ToDoItem(title, description, dueDate, priority, notes, checklist);
}

function createProject(name) {
    return new Project(name);
}




