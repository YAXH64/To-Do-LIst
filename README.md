# ✅ To-Do List App  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://yaxh64.github.io/Todo-List/)  

A **simple, stylish, and interactive To-Do List application** built with HTML, CSS, and JavaScript.  
This project helps users add, manage, and track tasks with features like task completion, deletion, persistence using local storage, and keyboard shortcuts.  

---

## ✨ Features  

| Feature                  | Description |
|---------------------------|-------------|
| ➕ Add Tasks              | Add new tasks quickly using the input bar. |
| ✅ Mark as Complete       | Click to mark tasks as **completed** (strikethrough effect). |
| 🗑 Delete Tasks           | Remove unwanted tasks with a single click. |
| 💾 Local Storage Support  | Tasks are saved in your browser, even after refresh. |
| ⌨ Keyboard Support        | Press `Enter` to add tasks instantly. |
| 🎨 Responsive UI          | Clean and responsive design for all screen sizes. |
| 📋 Task Counter           | Shows how many tasks are left to complete. |

---

## 🌐 Demo  

👉 Try it here: [To-Do List App](https://yaxh64.github.io/Todo-List/)  

---

## 🛠 Tech Stack  

- **HTML5** → Structure  
- **CSS3** → Styling and layout  
- **JavaScript (ES6)** → App logic and interactivity  
- **Local Storage** → Task persistence  

---

## 🚀 Getting Started  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/YAXH64/Todo-List.git
Open the project
Open index.html in your browser.

Usage

Type a task in the input box.

Press Enter or click Add to save it.

Click on a task to mark it complete.

Click 🗑 to delete a task.

Tasks will remain saved (thanks to Local Storage).

🧩 Code Snippet (Adding Tasks)
js
Copy code
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();

  taskInput.value = "";
}
🔮 Future Enhancements
🌙 Dark/Light theme toggle

📅 Due dates & reminders

📊 Task categories & filters (work, personal, completed, pending)

🔍 Search bar to find tasks quickly

☁️ Cloud sync with login system

📸 Screenshots
(Add screenshots of your project here if you have them!)

📜 License
This project is licensed under the MIT License.

🌐 Connect with Me
GitHub: @YAXH64

Portfolio: yashyadavdev.vercel.app

Email: yashyadav1.dev@gmail.com

⭐ If you like this project, don’t forget to star the repo and share it!

pgsql
Copy code

Do you also want me to create a **version with badges (stars, forks, visitors, tech stack logos)** at 
