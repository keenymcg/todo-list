// Create a new ToDoItem instance
const task1 = new ToDoItem("Mow Lawn", "Time to mow the lawn", null, null, [], [], false);

// Test the editTodo method
task1.editTodo("Water Plants", "Time to water the plants", null, null);
console.log(task1.title); // Output: "Water Plants"
console.log(task1.description); // Output: "Time to water the plants"

// Test the markAsComplete method
task1.markAsComplete();
console.log(task1.completed); // Output: true

// Test the addNote method
task1.addNote("Remember to use fertilizer");
console.log(task1.notes); // Output: ["Remember to use fertilizer"]

// Test the addChecklistItem method
task1.addChecklistItem("Buy new gardening gloves");
console.log(task1.checklist); // Output: ["Buy new gardening gloves"]

// Test the removeChecklistItem method
task1.removeChecklistItem(0);
console.log(task1.checklist); // Output: []