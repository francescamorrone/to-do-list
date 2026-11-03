const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector(".empty-state");
const toDosContainer = document.querySelector(".to-dos-container");

//per rimuovere l'immagine quando ci sono elementi alla lista
const toggleEmptyState = () => {
    if(taskList.children.length === 0) {
        emptyState.style.display = "flex";
    } else {
        emptyState.style.display = "none";
    }
}

const addTask = (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if(!taskText) {
        return;
    }

    const li = document.createElement("li");
    const checkboxList = document.createElement("input");
    checkboxList.type = "checkbox";

    const spanText = document.createElement("span");
    spanText.textContent = taskText;

    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    //creo l'icona
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen")
    editButton.appendChild(editIcon);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    //creo l'icona 
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash")
    deleteButton.appendChild(deleteIcon);
    
    // deleteButton.addEventListener("click", () => {
    // li.remove();
    // toggleEmptyState();
    // });

    taskButtons.append(editButton, deleteButton);
    li.append(checkboxList, spanText, taskButtons);
    
    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyState();
};

//event delegation sul bottone del cestino
taskList.addEventListener("click", (event) =>{
    const deleteButton = event.target.closest(".delete-button");
    const editButton = event.target.closest(".edit-button");

    if (deleteButton) {
        const li = deleteButton.closest("li");
        li.remove();
        toggleEmptyState();
    }

        if (editButton) {
        const li = editButton.closest("li");
        // Cerca la checkbox usando il selettore corretto
        const checkbox = li.querySelector("input[type='checkbox']");

        if (!checkbox.checked) {
            taskInput.value = li.querySelector("span").textContent;
            li.remove();
            toggleEmptyState();
}
}
});

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        addTask(e);
    }
})

