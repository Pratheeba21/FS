const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const completeBtn = document.createElement("div");
    completeBtn.className = "complete-btn";

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;

    completeBtn.addEventListener("click", function () {

        if (completeBtn.textContent === "✓") {
            completeBtn.textContent = "";
        } else {
            completeBtn.textContent = "✓";
        }

        completeBtn.classList.toggle("checked");
        textSpan.classList.toggle("completed");
    });

    leftDiv.appendChild(completeBtn);
    leftDiv.appendChild(textSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});