/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';

const input = document.getElementById('task');
const submit = document.querySelector('.add-btn');
const tasksDiv = document.querySelector('.tasks');

let tasks = [];

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

const addelemToPage = (tasks) => {
  tasksDiv.innerHTML = '';
  tasks.forEach((task, index) => {
    // console.log(task);
    // console.log(index);
    const div = document.createElement('div');
    div.className = 'task';
    div.setAttribute('data-id', task.id);
    div.innerHTML = `
    <input id="${index}" class="checkbox" type="checkbox">
    <p class='text' contenteditable="false">${task.descripton}</p>
    <button type="button"  id="${index}" class='del' >
    <span class='material-symbols-outlined del'>delete</span>
    </button>
    `;
    tasksDiv.appendChild(div);
  });
};

const getDataStorage = () => {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data);
    // console.log(data);
    addelemToPage(tasks);
  }
};

getDataStorage();

// add task
submit.onclick = (e) => {
  e.preventDefault();
  if (input.value !== '') {
    addTask(input.value);
    input.value = '';
  }
};

// Click on task element
tasksDiv.addEventListener('click', (e) => {
  // Delete btn
  if (e.target.classList.contains('del')) {
    // remove elem from localStorage
    deleteTaskWith(e.target.parentElement.parentElement.getAttribute('data-id'));
    // remove elem from page
    e.target.parentElement.parentElement.remove();
  }
  // edit task
  if (e.target.classList.contains('text')) {
    e.target.setAttribute('contenteditable', true);
  }
});

const addTask = (taskText) => {
  const task = {
    id: Date.now(),
    descripton: input.value,
    completed: false,
  };

  tasks.push(task);
  // console.log(tasks)
  // add tasks to page
  addelemToPage(tasks);
  // Add tasks to localStorage
  addDataStorage(tasks);
};

const addDataStorage = (tasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTaskWith = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  addDataStorage(tasks);
};