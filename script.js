const taskInput = document.getElementById("inp");
const addBtn = document.getElementById("add_button");
const taskList = document.getElementById("task_list");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Complete button (left)
  const completeBtn = document.createElement("div");
  completeBtn.className = "complete-btn";

  // Task text (center)
  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  // Delete button (right)
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Complete logic
  completeBtn.addEventListener("click", function () {
    completeBtn.classList.toggle("checked");
    textSpan.classList.toggle("completed");
    completeBtn.textContent = completeBtn.textContent === "✓" ? "" : "✓";
  });

  // Delete logic
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Append directly to li
  li.appendChild(completeBtn);
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);

  taskInput.value = "";
});
