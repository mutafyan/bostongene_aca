const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const pendingTasks = document.getElementById("pending-tasks");
const doneTasks = document.getElementById("done-tasks");

let tasks = [];
let taskIdCounter = 1;

const getTaskItem = (id, taskText, isDone = false) => {
    const li = document.createElement("li");
    li.id = `task-${id}`;

    const taskTextElement = document.createElement("span");
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;
    if (isDone) {
        taskTextElement.style.textDecoration = "line-through";
    }

    li.appendChild(taskTextElement);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.id = 'edit-button';
    editButton.addEventListener("click", () => {
        const newTaskText = prompt("Edit your task:", taskText);
        if (newTaskText && newTaskText !== taskText) {
            taskTextElement.textContent = newTaskText;
            tasks = tasks.map(task => task.id === id ? { ...task, text: newTaskText } : task);
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = 'delete-button'; // Use ID for specific button styling
    deleteButton.addEventListener("click", () => {
        li.remove();
        tasks = tasks.filter(task => task.id !== id);
    });

    const doneButton = document.createElement("button");
    doneButton.textContent = isDone ? "Undo" : "Done";
    doneButton.style.backgroundColor = isDone ? 'blue' : "green";
    doneButton.addEventListener("click", () => {
        const taskList = isDone ? pendingTasks : doneTasks;
        taskTextElement.style.textDecoration = isDone ? "" : "line-through";
        taskList.appendChild(li);

        doneButton.textContent = isDone ? "Done" : "Undo";
        debugger;
        doneButton.style.backgroundColor = isDone ? 'green' : "blue";
        isDone = !isDone;
        tasks = tasks.map(task => task.id === id ? { ...task, isDone } : task);
        renderTasks();
    });

    appendButtons(doneButton, editButton, deleteButton, li, isDone);
    return li;
};

const appendButtons = (doneButton, editButton, deleteButton, li, isDone) => {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("task-buttons");
    buttonsContainer.appendChild(doneButton);
    if (!isDone) {  // only show the edit button if the task is not done
        buttonsContainer.appendChild(editButton);
    }
    buttonsContainer.appendChild(deleteButton);
    li.appendChild(buttonsContainer);
};

const renderTasks = () => {
    pendingTasks.innerHTML = '';
    doneTasks.innerHTML = '';
    
    tasks.forEach(task => {
        const li = getTaskItem(task.id, task.text, task.isDone);
        const taskList = task.isDone ? doneTasks : pendingTasks;
        taskList.appendChild(li);
    });
};

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = { id: taskIdCounter++, text: taskText, isDone: false };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = "";
    }
});
