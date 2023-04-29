
const form = document.getElementById('todo-form');

const list = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', (event) => {

  event.preventDefault();
  
  const input = document.getElementById('new-todo');

  const text = input.value.trim();
  
  if (text !== '') {
    todos.push(text);}
  
  input.value = '';
  
  TodoList()});

function TodoList() {

  list.innerHTML = '';
  var item = document.getElementById("Todoinput").value

  var text = document.createTextNode (item)

  var newitem = document.createElement("li")
  
  newitem.appendChild(text)

  document.getelementbyID("todolist").appendChild(newitem)
    }


