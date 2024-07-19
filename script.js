//Retrieve todo from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");
const todoCount = document.getElementById("count");
const addTask = document.querySelector(".btn");
const deleteTask = document.getElementById("delete");

document.addEventListener("DOMContentLoaded", function() {
    addTask.addEventListener("click", addTask());
    todoInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    deleteTask.addEventListener("click", deleteTasks());
    displayTasks();
});

function addTask() {

}

function deleteTasks() {

}

function displayTasks() {

}