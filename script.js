let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const dueDate = document.getElementById("dueDate").value;
  const category = document.getElementById("category").value;
  if (taskInput.value.trim() === "") return;
  tasks.push({
    text: taskInput.value,
    completed: false,
    dueDate,
    category
  });
  taskInput.value = "";
  document.getElementById("dueDate").value = "";
  saveTasks();
  renderTasks();
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let filtered = [...tasks];
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filter = document.getElementById("filter").value;
  if (search) filtered = filtered.filter(t => t.text.toLowerCase().includes(search));
  if (filter === "completed") filtered = filtered.filter(t => t.completed);
  else if (filter === "pending") filtered = filtered.filter(t => !t.completed);
  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.draggable = true;
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = `${task.text} [${task.category}] ${task.dueDate ? "📅 " + task.dueDate : ""}`;
    if (task.completed) span.classList.add("completed");
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.addEventListener("click", () => toggleTask(index));
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.addEventListener("click", () => editTask(index));
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", () => deleteTask(index));
    li.append(span, completeBtn, editBtn, deleteBtn);
    taskList.appendChild(li);
    li.addEventListener("dragstart", () => li.classList.add("dragging"));
    li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
      updateOrder();
    });
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText;
    saveTasks();
    renderTasks();
  }
}

function updateOrder() {
  const items = [...document.querySelectorAll("#taskList li")];
  const newTasks = [];
  items.forEach((li) => {
    const text = li.querySelector(".task-text").textContent.split(" [")[0];
    const task = tasks.find(t => t.text === text);
    if (task) newTasks.push(task);
  });
  tasks = newTasks;
  saveTasks();
}

document.getElementById("searchInput").addEventListener("input", renderTasks);
document.getElementById("filter").addEventListener("change", renderTasks);

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderTasks();
