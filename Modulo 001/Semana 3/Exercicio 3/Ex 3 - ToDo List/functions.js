const data = [{
    "taskDescription": "Almoçar às 12hs!",
    "task": "Almoço"
  },{
    "taskDescription": "Jantar no intervalo do Curso!",
    "task": "janta"
  }
];

const ul = document.getElementById("task");
data.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = user.task;
    ul.appendChild(li);
});

function printUser(taskDescription) {
    const p = document.getElementById("user");
    p.innerHTML = taskDescription.taskDescription;
    console.log(data)
};

function changeTask(taskDescription){
    const task = document.getElementById('changeTask').value;
    console.log(task)
    const alterTask = data.find((alterDescription) => {
        return alterDescription
    });
    alterTask.task = task;
    printUser(alterTask.task);
    console.log(alterTask)
}

function changeTaskDescription(taskDescription){
    const task = document.getElementById('taskDescription').value;
    console.log(task)
    const alterTask = data.find((alterDescription) => {
        return alterDescription
    });
    alterTask.taskDescription = task;
    printUser(alterTask.taskDescription);
    console.log(alterTask)
}

const msgUser = "Tarefa não encontrada!";
function searchTask() {
    const task = document.getElementById('searchTask').value;
    const findtask = data.find((user) => {
            return user.task === task
    });
    findtask != undefined
        ? printUser(findtask)
        : printUser(msgUser)
};