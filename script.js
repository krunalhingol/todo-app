const todoList = [];
class todoItem {
  constructor(text) {
    this.text = text;
    this.complete = false;
  }
  getElement = (todoIndex) => {
    const listEl = document.createElement("li");
    listEl.className = `todo-item ${this.complete ? "complete" : ""}`;
    const todoText = document.createElement("span");
    todoText.className = "todo-text mr-2";
    todoText.innerText = this.text;
    const markCompleteButton = document.createElement("button");
    markCompleteButton.className = `mark-complete btn btn-success mr-2 ${
      this.complete ? "disabled" : ""
    }`;
    markCompleteButton.innerText = "Mark complete";
    markCompleteButton.onclick = () => markElement(todoIndex);
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete btn btn-danger mr-2";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteElement(todoIndex);
    listEl.append(todoText, markCompleteButton, deleteButton);
    return listEl;
  };
}
const addTodo = (text) => todoList.push(new todoItem(text));
const markComplete = (todoIndex) => (todoList[todoIndex].complete = true);
const deleteTodo = (todoIndex) => todoList.splice(todoIndex, 1);
const renderTodoList = () => {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((todo, index) => {
    const listItem = todo.getElement(index);
    console.log(listItem);
    list.appendChild(listItem);
  });
};

const submitAddElement = (event) => {
  event.preventDefault();
  const addText = event.target["add-text"];
  addTodo(addText.value);
  addText.value = ""
  renderTodoList();
};

const deleteElement = (itemIndex) => {
  deleteTodo(itemIndex);
  renderTodoList();
};

const markElement = (itemIndex) => {
  markComplete(itemIndex);
  renderTodoList();
};
