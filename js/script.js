// Temporary storage for todo items
let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    // Simple validation to check if inputs are filled (both of them)
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both todo and date.');
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        todos.push(newTodo);

        todoInput.value = '';
        todoDate.value = '';

        console.log(todos);
        renderTodos();
    }
}

// Function to toggle the status of a specific todo item 
function toggleStatus(index) {
    const statusBtn = document.getElementById(`status-btn-${index}`);
    if (statusBtn.innerText === 'Pending') {
        statusBtn.innerText = 'Completed';
        statusBtn.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
        statusBtn.classList.add('bg-green-500', 'hover:bg-green-600');
    } else {
        statusBtn.innerText = 'Pending';
        statusBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
        statusBtn.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
    }
}

// Function to delete a specific todo item
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');
 
    // Clear existing list and render header once
    todoList.innerHTML = `
        <tr class="border-b">
            <th class="p-2">TASK</th>
            <th class="p-2">DUE DATE</th>
            <th class="p-2">STATUS</th>
            <th class="p-2">ACTION</th>
        </tr>
    `;

    if (todos.length === 0) {
        return;
    }

    // Render each todo item on table row and table data
    todos.forEach((item, index) => {
        todoList.innerHTML += `
            <tr class="border-b">
                <td class="p-2 break-words max-w-[140px]">${item.todo}</td>
                <td class="p-2">${item.date}</td>
                <td class="p-2">
                    <button id="status-btn-${index}" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded" onclick="toggleStatus(${index})">Pending</button>
                </td>
                <td class="p-2">
                    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-center" onclick="deleteTodo(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}

// Function to filter todo items by due date ascending
function filterTodos() {
    todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderTodos();
}