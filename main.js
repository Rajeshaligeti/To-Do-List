let taskList = [];

const addTask = () => {
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (taskName && dueDate) {
        const task = {
            name: taskName,
            dueDate: dueDate,
            priority: priority,
            completed: false
        };

        taskList.push(task);
        renderTasks();
        clearInputFields();
    } else {
        alert("Please fill in all fields.");
    }
};

const deleteTask = (index) => {
    taskList.splice(index, 1);
    renderTasks();
};

const toggleCompletion = (index) => {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
};

const renderTasks = () => {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    taskList.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.classList.toggle("completed", task.completed);

        const priorityClass = task.priority.toLowerCase();
        taskElement.innerHTML = `
            <span class="task-name">${task.name}</span>
            <span class="task-details">
                <span class="task-date">${task.dueDate}</span>
                <span class="priority ${priorityClass}">${task.priority}</span>
            </span>
            <div class="task-actions">
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                <button class="toggle-btn" onclick="toggleCompletion(${index})">
                    ${task.completed ? "Mark as Pending" : "Mark as Completed"}
                </button>
            </div>
        `;

        taskListElement.appendChild(taskElement);
    });
};

const clearInputFields = () => {
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "Low";
};
