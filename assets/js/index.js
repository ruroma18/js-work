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
  listItem.append(createDeleteBtn(deleteHandler.bind(), taskText));

  return listItem;
};

function createDeleteBtn(onDelete, taskText) {
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-value', taskText);
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', onDelete);

  return deleteBtn;
};


function deleteHandler({ target: { dataset: { value } } }) {
  this.remove();
  const index = todoState.indexOf(value);

  todoState.splice(index, 1);
};

form.addEventListener('submit', addTask);
