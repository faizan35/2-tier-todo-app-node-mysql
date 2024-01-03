// Dummy data for testing
const initialTasks = [
  { id: 1, text: "Complete project", completed: false },
  { id: 2, text: "Read a book", completed: true },
  { id: 3, text: "Go for a run", completed: false },
];

// Function to initialize tasks
function initializeTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  initialTasks.forEach((task) => {
    addTaskToDOM(task);
  });
}

// Function to add a task to the DOM
function addTaskToDOM(task) {
  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${task.text}</span>
        <button onclick="completeTask(${task.id})">Complete</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
    `;
  taskList.appendChild(taskItem);
}

// Function to add a new task
async function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== "") {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newTaskText }),
      });

      if (response.ok) {
        const newTask = await response.json();
        addTaskToDOM(newTask);
        taskInput.value = "";
      } else {
        console.error("Failed to add task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
}

// Function to complete a task
function completeTask(taskId) {
  // Implement task completion logic here
  console.log(`Task ${taskId} completed`);
}

// Function to delete a task
function deleteTask(taskId) {
  // Implement task deletion logic here
  console.log(`Task ${taskId} deleted`);
}

// Initialize tasks on page load
initializeTasks();
