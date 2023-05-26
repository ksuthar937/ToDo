let date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
let selectDateElement = document.getElementById("date-time");
selectDateElement.textContent = date;

let inputBox = document.getElementById("newtext");
let listContainer = document.getElementById("todolist");

function addTask() {
let todoTask = inputBox.value;
if (todoTask === "") {
alert("You must write something!");
} else {
let div = document.createElement("div");
div.innerHTML = `<li class="list-group-item p-3">
    <input class="form-check-input me-1" id="todo-1" type="checkbox">
    <label class="form-check-label" for="todo-1" >${todoTask}
    </label>
    </li>`;
listContainer.append(div);
}
todoTask = "";

localStorage.setItem("todoTask", JSON.stringify(todoTask));
}

const clearlist = document.getElementById("clearlist");
clearlist.addEventListener("click", () => {
listContainer.innerHTML = ''
});


// console.log(listContainer)

// listContainer.addEventListener("input", (e) => {
//     e.preventDefault();
//     const 
// })


// localStorage.setItem("filters", JSON.stringify(filters));


// JSON.parse(localStorage.getItem("filters"));