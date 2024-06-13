const { ToDoItem, Project, ToDoListApp } = require('./index'); // Assuming index.js exports ToDoItem, Project, ToDoListApp

// Test for ToDoItem
test('ToDoItem functionality', () => {
    const task1 = new ToDoItem("Mow Lawn", "Time to mow the lawn", null, null, [], [], false);

    task1.editTodo("Water Plants", "Time to water the plants", null, null);
    expect(task1.title).toBe("Water Plants");
    expect(task1.description).toBe("Time to water the plants");

    task1.markAsComplete();
    expect(task1.completed).toBe(true);

    task1.addNote("Remember to use fertilizer");
    expect(task1.notes).toEqual(["Remember to use fertilizer"]);

    task1.addChecklistItem("Buy new gardening gloves");
    expect(task1.checklist).toEqual(["Buy new gardening gloves"]);

    task1.removeChecklistItem(0);
    expect(task1.checklist).toEqual([]);
});

// Test for Project
test('Project functionality', () => {
    const project1 = new Project("Gardening");

    project1.addTodo(new ToDoItem("Water Plants", "Time to water the plants", null, null, [], [], false));
    expect(project1.todoItems.length).toBe(1);

    project1.removeTodo(0);
    expect(project1.todoItems.length).toBe(0);

    project1.editProject("Indoor Gardening");
    expect(project1.name).toBe("Indoor Gardening");
});

// Test for ToDoListApp
test('ToDoListApp functionality', () => {
    const app = new ToDoListApp();

    app.addProject("Gardening");
    expect(app.projects.length).toBe(2);

    app.removeProject(0);
    expect(app.projects.length).toBe(1);

    const project = app.getProject(0);
    expect(project.name).toBe("Gardening");
});