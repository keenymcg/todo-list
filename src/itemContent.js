
function itemsContent(items) {

    const container = document.createElement('div');

    items.forEach(item => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');

        h3.textContent = item.title;
        p.textContent = item.description;
        h4.textContent = item.dueDate;
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