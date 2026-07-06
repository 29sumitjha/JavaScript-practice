const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-todo-input');
    const todoItem = inputElement.value;

    todoList.push(todoItem);
    //console.log(todoList);

    inputElement.value = '';

    renderTodoList();

}