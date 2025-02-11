const addTaskBtn = document.getElementById("addTaskBtn");
const taskBox = document.getElementById("taskBox");
const cancelTaskBtn = document.getElementById("cancelTaskBtn");

function taskBoxPreview() {
    addTaskBtn.addEventListener("click", () => {
        taskBox.classList.remove("hidden");
    })

    cancelTaskBtn.addEventListener("click", () => {
        taskBox.classList.add("hidden");
    })
}
taskBoxPreview();

function datePicker() {
    document.getElementById("dateDropdownBtn").addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event bubbling
        let dropdown = document.getElementById("dateDropdown");

        dropdown.classList.toggle("hidden");
    });

    document.getElementById("calendarInput").addEventListener("change", function () {
        document.getElementById("dateDropdownBtn").querySelector("h6").textContent = this.value;
        document.getElementById("dateDropdown").classList.add("hidden"); // Hide dropdown after selection
    });

    document.addEventListener("click", function (event) {
        let dropdown = document.getElementById("dateDropdown");
        let btn = document.getElementById("dateDropdownBtn");

        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add("hidden");
        }
    });
}
datePicker();

function priorityDropdownToggle() {
    document.querySelector("#priorityDropdownBtn").addEventListener("click", (e) => {
        e.stopPropagation();
        let dropdown = document.getElementById("priorityDropdown");

        dropdown.classList.toggle("hidden");
    });

    document.querySelectorAll("#priorityDropdown li").forEach(item => {
        item.addEventListener("click", function () {
            document.getElementById("priorityDropdownBtn").querySelector("h6").textContent = this.dataset.value;
            document.getElementById("priorityDropdown").classList.add("hidden");
        })
    });

    document.addEventListener("click", (e) => {
        let dropdown = document.getElementById("priorityDropdown");
        let priorityDropdownBtn = document.getElementById("priorityDropdownBtn");

        if (!priorityDropdownBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    })

}
priorityDropdownToggle();

function resetBtn() {
    document.getElementById("resetBtn").addEventListener("click", function () {
        // Reset Task Title & Description
        document.querySelector("input[name='newtask']").value = "";

        let descriptionField = document.querySelector("input[name='newtask']:nth-of-type(2)");
        if (descriptionField) {
            descriptionField.value = "";
        }

        // Reset Date (Fix for calendar input)
        let calendarInput = document.getElementById("calendarInput");
        if (calendarInput) {
            calendarInput.value = "";
            calendarInput.type = "text";
            calendarInput.type = "date";

            document.getElementById("dateDropdownBtn").querySelector("h6").textContent = "Select Date";
        }

        document.getElementById("priorityDropdownBtn").querySelector("h6").textContent = "Priority";
    });
}
resetBtn();

