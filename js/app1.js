// 使用let 声明变量
let tasks = [];
let currentFilter = "all";

// 使用const声明变量
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const statusElement = document.getElementById("stats");

// 使用数值类型示例
const defaultTaskCount = 0;
const defaultCompletionRate = 0;

const appName = "任务管理系统";
const appVersion = "1.0.0";
const appDescription = `${appName} 版本${appVersion}。`;
console.log(appDescription);

const isAppRunning = true;
const isDebugMode = true;
//添加任务函数
function addTask() {
    const currentTaskCount = tasks.length + 1;
    if (taskInput.value === "") {
        alert("任务不能为空");
    }

    // if (){}

    if 

    const newTask = {
        id: Date.now(),
        text: taskInput.value,
        completed: false,
        createAt: new Date(),
    }

    tasks.push(newTask);

    taskInput.value = "";

}