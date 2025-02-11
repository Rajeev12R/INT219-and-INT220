const addTaskBtn = document.getElementById("addTaskBtn");
const taskBox = document.getElementById("taskBox");
const cancelTaskBtn = document.getElementById("cancelTaskBtn");

addTaskBtn.addEventListener("click", () => {
    taskBox.classList.remove("hidden");
})

cancelTaskBtn.addEventListener("click", () => {
    taskBox.classList.add("hidden");
})