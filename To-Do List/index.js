let todoApp = {
    tasks: [],
    addTask(task){
        this.tasks.push({task: task, completed: false})
        this.renderTask()
    },

    toggleTask(index){
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTask()
    },

    removeCompletedTasks(){
        this.tasks = this.tasks.filter(task => !task.completed)
        this.renderTask();
    },

    renderTask(){
        let taskInput = document.getElementById("taskList");
        taskList.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.task;
            li.onclick = () => this.toggleTask(index);
            
            if(task.completed){
                li.classList.add('completed')
            }
            taskList.appendChild(li);
        });

    }

};

document.getElementById('addTask').onclick = () => {
    let taskInput = document.getElementById("taskInput");
    todoApp.addTask(taskInput.value);
    console.log(taskInput.value)
    taskInput.value='';
}