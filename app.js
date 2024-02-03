const allTodos = document.querySelector('.all-todos');

const newTodoInput = document.querySelector('.todo-input');

const addTodoBtn = document.querySelector('.todo-add');

const form = document.querySelector('form');


allTodos.addEventListener('click', e => {
    if(e.target.tagName === 'I'){
        const todos = JSON.parse(localStorage.getItem('todos'));
        const updatedTodos = todos.filter(item => {
            if(item === e.target.parentElement.children[0].innerText){
                return false;
            }
            return true;
        });
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        e.target.parentElement.remove();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    let todo = `<li class="todo">
    <span>${newTodoInput.value}</span>
    <i class="fa-solid fa-trash delete"></i>
    </li>`;
    allTodos.innerHTML += todo;
    if(localStorage.getItem('todos')){
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(newTodoInput.value);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    else{
        const todos = [];
        todos.push(newTodoInput.value);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    newTodoInput.value = '';
});


if(localStorage.getItem('todos')){
    JSON.parse(localStorage.getItem('todos')).forEach(todo => {
        let html = `<li class="todo">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>
        </li>`;
        allTodos.innerHTML += html;
    });
}