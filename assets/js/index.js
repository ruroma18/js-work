'use strict';

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const todoTask = [];
  
const addTask = (e) => {
  const {target: { elements } } = e;
  e.preventDefault();
  const listItem = document.createElement('li');
  listItem.textContent = elements.text.value;
  todoTask.push(elements.text.value);
  taskList.append(listItem);
};

taskForm.addEventListener('submit', addTask);
