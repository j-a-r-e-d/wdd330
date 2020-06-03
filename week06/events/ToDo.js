let log = console.log;

window.onload = function() {
  document.getElementById('task').focus();
};

function getListTodos() {
    var todos = new Array;
    var todosList = localStorage.getItem('todo');
    if (todosList !== null) {
        todos = JSON.parse(todosList); 
    }
    return todos;
}

function add() {
    var newTask = document.getElementById('task');

    var todos = getListTodos();
    todos.push(newTask.value);
    localStorage.setItem('todo', JSON.stringify(todos));

    display();

    newTask.value = '';
    document.getElementById('task').focus();


    return false;
}

function display() {
    var todos = getListTodos();

    var htmlInsert = '<ul>';
    for(var i = 0; i < todos.length; i++) {
        htmlInsert += 	'<img src="radio_button_unchecked-white-48dp.svg" class="circle"><li class="taskLine">' + 
        				todos[i] + 
        				'</li><img src="delete_circle-white-48dp.svg" class="delete" id="delete' +
        				[i] +
        				'"><br>';
        log("id[i] = delete" + i);
    };
    htmlInsert += '</ul>';

    document.getElementById('todos').innerHTML = htmlInsert;

    var deletions = document.getElementsByClassName('delete');
    for (var i=0; i < deletions.length; i++) {
        deletions[i].addEventListener('click', remove);
    };
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getListTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    display();

    return false;
}

document.getElementById('add').addEventListener('click', add);

display();