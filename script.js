let items = [];

function createItem() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
        items.push(name);
        nameInput.value = '';
        renderTable();
    }
}

function readItems() {
    return items;
}

function updateItem(index) {
    const newName = prompt('Ingrese el nuevo nombre:');
    if (newName) {
        items[index] = newName;
        renderTable();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderTable();
}

function renderTable() {
    const tableBody = document.querySelector('#crudTable tbody');
    tableBody.innerHTML = '';
    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item}</td>
            <td>
                <button class="edit" onclick="updateItem(${index})">Editar</button>
                <button class="delete" onclick="deleteItem(${index})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
