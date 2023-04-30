// JS 
let todos = [];


form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const text = input.value.trim();

  if (text !== '') {
    const todo = { text, complete: false };
    todos.push(todo);

    const form = document.getElementById('todo-form');
    const list = document.getElementById('todo-list');

  
    renderTodos();}});

    input.value = '';

    function renderTodos() {

    list.innerHTML = '';

  todos.forEach((todo, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <input type="checkbox" ${todo.complete ? 'checked' : ''} data-index="${index}">
      <span class="${todo.complete ? 'complete' : ''}">${todo.text}</span>
      <button class="delete" data-index="${index}">X</button>
    `;
    list.appendChild(item);
  });}

  
list.addEventListener('click', e => {
  if (e.target.matches('input[type="checkbox"]')) {
    
    const index = e.target.dataset.index;
    todos[index].complete = !todos[index].complete;

  
    renderTodos();}

  if (e.target.matches('.delete')) {
    

renderTodos();}});

renderTodos();
   

const index = e.target.dataset.index;
    todos.splice(index, 1);
