const form = document.querySelector("form");
const input = document.querySelector("input.todo-input");
const todoContainer = document.querySelector("ul.todo-container");
const deleteTodoBtn = document.querySelector("button.delete-todo");

function addNewTodo(todo) {
  const li = document.createElement("li");
  li.classList = "list-group-item d-flex align-items-center";

  const input = document.createElement("input");
  input.classList = "form-check-input me-3";
  input.type = "checkbox";
  input.id = todo;

  const label = document.createElement("label");
  label.classList = "form-check-label";
  label.setAttribute("for", todo);
  label.textContent = todo;

  li.appendChild(input);
  li.appendChild(label);

  todoContainer.appendChild(li);
}

deleteTodoBtn.addEventListener("click", () => {
  const todoCheckboxes = todoContainer.querySelectorAll("input");
  todoCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentNode.remove();
    }
  });

  let checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (checkedCheckboxes.length === 0) {
    deleteTodoBtn.classList.add("d-none");
  }
});

todoContainer.addEventListener("click", () => {
  let checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (checkedCheckboxes.length > 0) {
    deleteTodoBtn.classList.remove("d-none");
  } else {
    deleteTodoBtn.classList.add("d-none");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTodo(input.value);
  input.value = "";
});
