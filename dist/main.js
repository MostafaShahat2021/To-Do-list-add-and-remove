/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-unused-vars */\nconst input = document.getElementById('task');\nconst submit = document.querySelector('.add-btn');\nconst tasksDiv = document.querySelector('.tasks');\n\nlet tasks = [];\n\nif (localStorage.getItem('tasks')) {\n  tasks = JSON.parse(localStorage.getItem('tasks'));\n}\n\nconst addelemToPage = (tasks) => {\n  tasksDiv.innerHTML = '';\n  tasks.forEach((task, index) => {\n    // console.log(task);\n    // console.log(index);\n    const div = document.createElement('div');\n    div.className = 'task';\n    div.setAttribute('data-id', task.id);\n    div.innerHTML = `\n    <input id=\"${index}\" class=\"checkbox\" type=\"checkbox\">\n    <p class='text' contenteditable=\"false\">${task.descripton}</p>\n    <button type=\"button\"  id=\"${index}\" class='del' >\n    <span class='material-symbols-outlined del'>delete</span>\n    </button>\n    `;\n    tasksDiv.appendChild(div);\n  });\n};\n\nconst getDataStorage = () => {\n  const data = window.localStorage.getItem('tasks');\n  if (data) {\n    const tasks = JSON.parse(data);\n    // console.log(data);\n    addelemToPage(tasks);\n  }\n};\n\nconst addDataStorage = (tasks) => {\n  window.localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst deleteTaskWith = (taskId) => {\n  tasks = tasks.filter((task) => task.id !== taskId);\n  addDataStorage(tasks);\n};\n\ngetDataStorage();\n\nconst addTask = (taskText) => {\n  const task = {\n    id: Date.now(),\n    descripton: input.value,\n    completed: false,\n  };\n\n  tasks.push(task);\n  // console.log(tasks)\n  // add tasks to page\n  addelemToPage(tasks);\n  // Add tasks to localStorage\n  addDataStorage(tasks);\n};\n\n// add task\nsubmit.onclick = (e) => {\n  e.preventDefault();\n  if (input.value !== '') {\n    addTask(input.value);\n    input.value = '';\n  }\n};\n\n// Click on task element\ntasksDiv.addEventListener('click', (e) => {\n  // Delete btn\n  if (e.target.classList.contains('del')) {\n    // remove elem from localStorage\n    deleteTaskWith(e.target.parentElement.parentElement.getAttribute('data-id'));\n    // remove elem from page\n    e.target.parentElement.parentElement.remove();\n  }\n  // edit task\n  if (e.target.classList.contains('text')) {\n    e.target.setAttribute('contenteditable', true);\n  }\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);