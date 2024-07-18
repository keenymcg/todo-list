// import { Project } from './classes.js';
import { createTodoItem, renderProjects, renderItems, saveToLocalStorage } from './index.js';
import { itemsContent } from './itemContent.js';
import addProjectClickListener from './projClickListener.js';

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
    container.appendChild(submit); // Append the submit button
    
    submit.addEventListener('click', () => {
        const projectName = input.value;
        todoListApp.addProject(projectName);
        saveToLocalStorage(todoListApp); // Save to localStorage
        // console.log(todoListApp.projects); // Call renderProjects from Index.js to update the UI
        container.removeChild(input); // Remove the input field after submission
        container.removeChild(submit); // Remove the submit button after submission
        renderProjects();
        addProjectClickListener(todoListApp, document.getElementById('content'));
    }); 

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

    const newItemBtn = document.getElementById('projAdd'); // Ensure newItemBtn is defined

    document.getElementById('projAdd').addEventListener('click', () => {
        if (!newItemBtn.contains(form)) { // Check if the form is not already appended
            newItemBtn.innerHTML = ''; // Clear the button only if the form isn't already there
            newItemBtn.appendChild(form); // Append the form
        }
    });
    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // ISSUE / FUTURE: Make a checkError function to check for empty fields
        // maybe this goes after the collected form values...
        // it could/would look like: if checkError() {
        // return an error message and stop following code from executing; }

        // Collect form values
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        // Create ToDoItem and add it to the project
        const todoItem = createTodoItem(title, description, dueDate, priority);
        project.addTodo(todoItem);
        // saveToLocalStorage(todoListApp); // Save to localStorage

        // Clear newItem button for next input
        newItemBtn.removeChild(form); // Remove the form after submission
        newItemBtn.textContent = '+ New To Do Item'; // Reset the button text

        // Re-render the items to show the updated list
        container.innerHTML = ''; // Clear the container
        container.appendChild(itemsContent([project])); // Re-render items for the current project
        
        renderItems(project);
        toDoItemAdd(project); // Re-add the event listener for the new item button
    });
};

export function hideAddBtn() {
    const addBtn = document.getElementById('projAdd');
    addBtn.style.display = 'none';
}

export function showAddBtn(element) {
    const addBtn = document.getElementById('projAdd');
    addBtn.style.display = 'block';
}