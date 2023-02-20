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
    document.getElementById('addTaskList').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
    document.getElementById('changeTaskList').style.display = 'none';
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
    const taskDescriptionInput = document.getElementById('changetaskDescription').value;
    if (taskInput != '' && taskInput != undefined && taskInput != null && taskDescriptionInput != '' && taskDescriptionInput != undefined && taskDescriptionInput != null){
        data[indexTask].task=taskInput;
        data[indexTask].taskDescription=taskDescriptionInput;
    }
    document.getElementById('printSearch').style.display = 'none';
    document.getElementById('changeTask').value ='';
    document.getElementById('changetaskDescription').value = '';

}

function addTask() {
    const task = document.getElementById('addTask').value;
    const taskDescription = document.getElementById('addTaskDescription').value;
    document.getElementById('addTaskList').style.display = 'block';
    if (task != '' && task != undefined && task != null){
        data.push({ taskDescription  : String(taskDescription), 
                    task             : String(task)
                });
    }
    document.getElementById('addTask').value ='';
    document.getElementById('addTaskDescription').value = '';

}

function removeTask() {
    data.splice(indexTask, 1)
}

let indexTask = 0;
let searchOk = 0;
function searchTask() {
    document.getElementById('removeTaskList').style.display = 'block';
    document.getElementById('changeTaskList').style.display = 'none';
    document.getElementById('printSearch').style.display = 'none';
    document.getElementById('searchTask').style.display = 'block';

    const task = document.getElementById('searchTask').value;
    let searchTask = data.reduce((atual, valor, indice)=>{
        if (valor.task == task) { 
            indexTask = indice;
            printUser(valor.task, valor.taskDescription);
            searchOk = 1;
        }
    },0)
    searchOk
        ? ( document.getElementById('removeTaskList').style.display = 'block', searchOk = 0 )
        : ( document.getElementById('removeTaskList').style.display = 'none', printUser('Tarefa não existe!',task) )
    document.getElementById('searchTask').value = '';
};

eventclickaddtask.addEventListener('click', (event) => {
    document.getElementById('addTaskList').style.display = 'block';
    document.getElementById('removeTaskList').style.display = 'none';
    document.getElementById('printSearch').style.display = 'none';
});

eventclickaddtaskinput.addEventListener('click', (event) => {
    document.getElementById('addTaskList').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
});

eventclickremovetask.addEventListener('click', (event) => {
    document.getElementById('printSearch').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
});

eventclickchangetask.addEventListener('click', (event) => {
    document.getElementById('changeTaskList').style.display = 'block';

});

eventclickchangetaskinput.addEventListener('click', (event) => {
    document.getElementById('changeTaskList').style.display = 'none';
    document.getElementById('printSearch').style.display = 'none';
    document.getElementById('removeTaskList').style.display = 'none';
});
