document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });
  
  function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value.trim();
  
    if (taskValue === "") return;
  
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span>${taskValue}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
  
    li.querySelector("span").addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  