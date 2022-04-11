'use strict';

const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoState = [];

const addTask = (e) => {
  e.preventDefault();
  const { target, target: { elements } } = e;
  const taskText = elements.task.value.trim();

  if (taskText) {
    todoState.push(taskText);

    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteHandler);

    listItem.textContent = taskText;

    listItem.append(deleteBtn);
    todoList.append(listItem);
  };
  
function deleteHandler(e) {
  e.target.parentElement.remove();
  
  const index = todoState.indexOf(e.target.parentElement.firstChild.textContent);

  todoState.splice(index, 1);
}


  target.reset();
};

form.addEventListener('submit', addTask);
