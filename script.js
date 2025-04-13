const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('请输入任务内容');
        return;
    }

    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '删除任务';
    deleteButton.classList.add('delete-btn');

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    taskInput.value = '';

    deleteButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}