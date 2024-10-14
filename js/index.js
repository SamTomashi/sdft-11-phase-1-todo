/** --------------- Business logic --------------------
 */
let tasks = []
 function getTasks(){
    fetch("http://localhost:3005/tasks")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
 }


/** -------------------- UI Logic -------------------- */

function handleSubmit(){
    document.getElementById("frm-task").addEventListener("submit", function(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries())
        addTask(data["task-name"])
    })
}

function removeTask(event) {
      event.target.closest("li").remove();
}

function addTask(task) {
    const ul = document.querySelector("#todo-list");
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = task;
    btn.innerText = "X";
    btn.classList.add("btn", "btn-danger", "btn-sm");
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener("click", removeTask);
}


document.addEventListener("DOMContentLoaded", function () {
    getTasks()
    handleSubmit()
});
