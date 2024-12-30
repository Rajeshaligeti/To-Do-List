let taskList = [];
document.getElementById('add-task').addEventListener('click', addTask);
function addTask() {
  let taskName = document.getElementById('task-name').value;
  let dueDate = document.getElementById('due-date').value;
  let priority = document.getElementById('priority').value;

  let task = {
    name: taskName,
    dueDate: dueDate,
    priority: priority
  };

  taskList.push(task);

  displayTasks();
}
function displayTasks() {
  let taskListHTML = '';

  taskList.forEach((task) => {
    taskListHTML += `
      <li>
        <span>${task.name}</span>
        <span>Due: ${task.dueDate}</span>
        <span>Priority: ${task.priority}</span>
        <button onclick="editTask(${taskList.indexOf(task)})">Edit</button>
        <button onclick="deleteTask(${taskList.indexOf(task)})">Delete</button>
      </li>
    `;
  });

  document.getElementById('task-list').innerHTML = taskListHTML;
}
function editTask(index) {
  let task = taskList[index];

  document.getElementById('task-name').value = task.name;
  document.getElementById('due-date').value = task.dueDate;
  document.getElementById('priority').value = task.priority;

  document.getElementById('add-task').innerHTML = 'Update Task';

  document.getElementById('add-task').addEventListener('click', () => {
    updateTask(index);
  });
}
function updateTask(index) {
  let taskName = document.getElementById('task-name').value;
  let dueDate = document.getElementById('due-date').value;
  let priority = document.getElementById('priority').value;

  let task = {
    name: taskName,
    dueDate: dueDate,
    priority: priority
  };

  taskList[index] = task;

  displayTasks();
}
function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}
