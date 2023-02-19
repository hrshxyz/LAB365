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

window.onload = function() {
    document.getElementById('changeTaskList').style.display = 'none';
    document.getElementById('changetaskDescriptionList').style.display = 'none';
    document.getElementById('addTaskList').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
    document.getElementById('searchTask').style.display = 'none';
    
}

function mountTasklist() {
    let allTaskList = document.getElementById("allTaskList");
    let ul = document.getElementById("task");
    allTaskList.removeChild(ul);
    allTaskList.appendChild(ul);
    ul.innerHTML ='';
    data.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = (`<b>Nome da Task:</b> ${task.task} => <b>Descrição da Task:</b> ${task.taskDescription}`);
        ul.appendChild(li);
    });
}
mountTasklist()
setInterval(mountTasklist,1000)

function printUser(task, taskDescription) {
    document.getElementById('printSearch').style.display = 'block';
    const ul = document.getElementById("task");
    const p = document.getElementById("printSearch");
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
    document.getElementById('changeTaskList').style.display = 'none';
    document.getElementById('changetaskDescriptionList').style.display = 'none';
    document.getElementById('printSearch').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
    document.getElementById('searchTask').style.display = 'block';
    document.getElementById('addTaskList').style.display = 'none';
    document.getElementById('changeTask').value = '';
    document.getElementById('taskDescription').value = '';

    const task = document.getElementById('searchTask').value;
    let searchTask = data.reduce((atual, valor, indice)=>{
        if (valor.task == task) { 
            document.getElementById('changeTaskList').style.display = 'block';
            document.getElementById('changetaskDescriptionList').style.display = 'block';
            document.getElementById('removeTaskList').style.display = 'block';
            indexTask = indice;
            printUser(valor.task, valor.taskDescription)
        }

    },0)
};

function addTask() {
    const task = document.getElementById('addTask').value;
    const taskDescription = document.getElementById('addTaskDescription').value;
    document.getElementById('addTaskList').style.display = 'block';
    if (task != '' && task != undefined && task != null){
        data.push({ taskDescription  : String(taskDescription), 
                    task             : String(task)
                });
    }
}

function removeTask() {
    data.splice(indexTask, 1)
}