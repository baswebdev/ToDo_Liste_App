document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="deleteTask">Löschen</button>
        `;
        taskList.appendChild(li);

        taskInput.value = "";
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteTask")) {
            e.target.parentElement.remove();
        }
    });
});
