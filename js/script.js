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

// Function to render todo items to the DOM
function renderTodos() {
 const todoList = document.getElementById('todo-list');
 
//  Clear existing list
 todoList.innerHTML = '';

//  Render each todo item
    todos.forEach((item, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500">(${item.date})</span></p>
            <hr />
        </li>`;
    });
}

// Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}

function filterTodos() {

}