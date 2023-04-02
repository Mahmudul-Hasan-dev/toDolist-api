function todos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        //send data and call a function to display the data
        .then(data => display(data))
}
//call function in general to show data automatically without event or click
todos();

function display(data) {
    // console.log(data)
    //get the div where want to show
    const todolist = document.getElementById('todo-container');
    for (const todo of data) {
        // console.log(todo);
        const div = document.createElement('div');
        div.classList = 'todo'
        div.innerHTML = `
        <h3>userId-${todo.userId}</h3>
        <h4>id-${todo.id}</h4>
        <h2>title-${todo.title}</h2>
        <h4>status-${todo.completed ? 'completed' : 'not completed'}</h4> 
        `
        todolist.appendChild(div)
    }
}
//if else shortcut version
// condition ? true : false
// : act as else
// ? act as if innerbody
//<h4>status-${todo.completed ? 'completed' : 'not completed'}</h4>

