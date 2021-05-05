let addButton = document.querySelector("form button");
let inputText = document.querySelector("form input");
let ulTodoList = document.querySelector(".todo-container .todolist");

let checkDeleteFunction = (e) => {
  switch (e.target.classList.item(0)) {
    case "check":
      e.target.parentElement.parentElement.classList.toggle("completed");

      break;
    case "trash":
      e.target.parentElement.parentElement.remove();
      break;

    default:
      break;
  }
};

let addTodoFunction = (e) => {
  e.preventDefault();

  let divList = document.createElement("div");
  divList.classList.add("list");
  divList.addEventListener("click", (e) => {
    checkDeleteFunction(e);
  });

  divList.textContent = `${
    inputText.value.trim() !== "" ? inputText.value : "no-value-given"
  }`;

  let divButtonGroup = document.createElement("div");
  divButtonGroup.classList.add("buttonGroup");

  let checkButton = document.createElement("button");
  checkButton.classList.add("check");
  checkButton.innerHTML = `<i class="fas fa-check"></i>`;

  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;

  divList.appendChild(divButtonGroup);
  divButtonGroup.appendChild(checkButton);
  divButtonGroup.appendChild(trashButton);
  ulTodoList.appendChild(divList);

  console.log(divList);

  inputText.value = "";
};

addButton.addEventListener("click", (e) => {
  addTodoFunction(e);
});
