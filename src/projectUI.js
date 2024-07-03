// import { Project } from './classes.js';
import { createTodoItem, renderProjects, renderItems } from './index.js';
import itemsContent from './itemContent.js';

// CREATE AND DISPLAY A NEW PROJECT

export function projectAdd(todoListApp) {
    const container = document.createElement('div');

    // Create input field for project name, and use that to create an instance of Project, then add it to the ToDoListApp, then append it to the content div
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Project Name';
    container.appendChild(input);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        const projectName = input.value;
        todoListApp.addProject(projectName);
        // console.log(todoListApp.projects); // Call renderProjects from Index.js to update the UI
        renderProjects();
    });
    container.appendChild(submit);  

    return container;
};

export function navButtonSwitch(buttonText) {
    const addBtnType = document.getElementById('projAdd');
    addBtnType.textContent = buttonText;
};

export function toDoItemAdd(project) {

    const container = document.createElement('div');

    // Create form elements
    const form = document.createElement('form');
    form.id = 'todoForm';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    titleInput.id = 'title';

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.id = 'description';

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.id = 'dueDate';

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    ['High', 'Medium', 'Low'].forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add To Do Item';

    // Append inputs to form
    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInput);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);

    const newItemBtn = document.getElementById('projAdd');
    newItemBtn.innerHTML = ''; // Clear the button
    newItemBtn.appendChild(form); // Append the form 

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Collect form values
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        // Create ToDoItem and add it to the project
        const todoItem = createTodoItem(title, description, dueDate, priority);
        project.addTodo(todoItem);

        // Clear newItem button for next input
        newItemBtn.innerHTML = ''; // Clear the button
        newItemBtn.textContent = '+ New To Do Item'; // Reset the button text

        // Re-render the items to show the updated list
        container.innerHTML = ''; // Clear the container
        container.appendChild(itemsContent([project])); // Re-render items for the current project
        
        renderItems(project);
    });
};