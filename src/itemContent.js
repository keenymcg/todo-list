import { format, formatDistanceToNow } from 'date-fns';

function itemsContent(allProjects) {
    
    const container = document.createElement('div');

    // Take array of Project objects and reduce it to a single array of ToDoItem objects
    const items = allProjects.reduce((acc, project) => {
        return acc.concat(project.todoItems);
    }, []); 

    items.forEach(item => {
        function pastOrPresent() { // Function to determine if the to-do item's dueDate is in the past or present
            const now = new Date();
            const itemDate = new Date(item.dueDate);
            const distance = formatDistanceToNow(itemDate, { addSuffix: true });
    
            if (itemDate > now) {
                return distance.replace('about', '').replace('over', ''); // "in 1 day", "in 2 days", etc.
            } else {
                return distance.replace('about', '').replace('over', ''); // "1 day ago", "2 days ago", etc.
            }
        };

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');

        h3.textContent = item.title;
        p.textContent = item.description;
        h4.textContent = `Due ${pastOrPresent()} on ${format(item.dueDate, 'MMMM d, yyyy')}`;
        h5.textContent = `Priority: ${item.priority}`;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h4);
        div.appendChild(h5);

        container.appendChild(div);
    })
    return container;
};

export default itemsContent;