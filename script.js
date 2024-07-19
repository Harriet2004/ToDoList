//Retrieve todo from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");
const todoCount = document.getElementById("count");
const addTasks = document.querySelector(".btn");
const deleteTask = document.getElementById("delete");