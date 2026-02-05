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
        console.log("Todo added:", todos);

        todoInput.value = '';
        todoDate.value = '';
    }
}

function renderTodos() {
    
}

function deleteAllTodos() {

}

function filterTodos() {

}