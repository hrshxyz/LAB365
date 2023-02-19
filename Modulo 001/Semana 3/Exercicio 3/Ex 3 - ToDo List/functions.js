const data = [
    {
        "taskDescription": "Jantar no intervalo do Curso!",
        "task": "janta"
    },
    {
        "taskDescription": "Almoçar às 12hs!",
        "task": "almoco"
    },
];

function mountTasklist() {
    let allTaskList = document.getElementById("allTaskList");
    let ul = document.getElementById("task");
    allTaskList.removeChild(ul);
    allTaskList.appendChild(ul);
    ul.innerHTML ='';
    data.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = (`Nome da Task: ${task.task} => Descrição da Task: ${task.taskDescription}`);
        ul.appendChild(li);
    });
}
mountTasklist()
setInterval(mountTasklist,1000)

function printUser(task, taskDescription) {
    const ul = document.getElementById("task");
    const p = document.getElementById("user");
    p.innerHTML = (`${task} - ${taskDescription}`);
    console.log(data)
};

function changeTask(task){
    const taskInput = document.getElementById('changeTask').value;
    data[indexTask].task=taskInput;
}

function changeTaskDescription(taskDescription){
    const taskDescriptionInput = document.getElementById('taskDescription').value;
    data[indexTask].taskDescription=taskDescriptionInput;
}

const msgUser = "Tarefa não encontrada!";
let indexTask = 0;

function searchTask() {
    const task = document.getElementById('searchTask').value;
    let searchTask = data.reduce((atual, valor, indice)=>{
        if (valor.task == task) { 
            indexTask = indice;
            printUser(valor.task, valor.taskDescription)
        }

    },0)
};