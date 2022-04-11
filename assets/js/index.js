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
    todoList.append(createLiElement(taskText));
  }

  target.reset();
};


function createLiElement(taskText) {
  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  listItem.append(createDeleteBtn());

  return listItem;
};

function createDeleteBtn() {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteHandler);

  return deleteBtn;
};


function deleteHandler({ target: { parentElement } }) {
  parentElement.remove();
  const index = todoState.indexOf(parentElement.firstChild.textContent);
  todoState.splice(index, 1);
};

form.addEventListener('submit', addTask);
