let tasks = [];
let editIndex = -1;

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (taskName === '' || dueDate === '' || priority === '') {
        alert('Please fill out all fields.');
        return;
    }

    const task = {
        name: taskName,
        dueDate: dueDate,
        priority: priority
    };

    if (editIndex === -1) {
        tasks.push(task);
    } else {
        tasks[editIndex] = task;
        editIndex = -1;
        document.getElementById('addTaskButton').textContent = 'Add Task';
    }

    displayTasks();
    clearForm();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const taskInfo = document.createElement('span');
        taskInfo.textContent = `Task: ${task.name}, Due: ${task.dueDate}, Priority: ${task.priority}`;
        li.appendChild(taskInfo);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'Low';
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('taskName').value = task.name;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('priority').value = task.priority;

    editIndex = index;
    document.getElementById('addTaskButton').textContent = 'Save Task';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
