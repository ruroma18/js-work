'use strict';

const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoState = [];
  
const addTask = (e) => {
  e.preventDefault();
  const {target: { elements } } = e;
  const taskText = elements.task.value;
  
  todoState.push(taskText);

  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  todoList.append(listItem);
};

form.addEventListener('submit', addTask);
