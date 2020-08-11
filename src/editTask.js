import {taskInfoDOM} from './taskInfoDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {todo} from './todoInitialLists';

const editTask = (() => {
    function deleteTask(taskIndex) {
        const currList = todoTaskDOM.getCurrentList();
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
        taskInfoDOM.exitModalOnButton();

    }

    function saveTask(task, data) {
        const inputTitle = document.querySelector('#title');
        const button = document.querySelector('#saveTask')
        const currList = todoTaskDOM.getCurrentList();

        if(button.classList.contains('enabled')){// ako je aktivno dugme
            task.title = data.title;
            task.description = data.description;
            task.dueDate = data.dueDate;
            task.priority = data.priority;
            task.note = data.note;

            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
            taskInfoDOM.exitModalOnButton();
        }else{
            inputTitle.style.backgroundColor = 'rgba(156, 54, 54, 0.4)';
        }

    }

    function moveTaskToBottom(taskDiv, list) {
        //console.log(task, list);
        const index = taskDiv.dataset.index;
        const task = list.getItems()[index];
        
        list.getItems().splice(index, 1);
        list.getItems().push(task);  
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoTaskDOM.renderListTasks(undefined, list.name);
        
    }
    function moveTaskToTop(taskDiv, list){
        const index = taskDiv.dataset.index;
        const task = list.getItems()[index];
        list.getItems().splice(index, 1);
        list.getItems().unshift(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoTaskDOM.renderListTasks(undefined, list.name);
    }

    function toggleFinishedFlag() {
        const currList = todoTaskDOM.getCurrentList();
        const taskIndex = this.parentNode.dataset.index;
        currList.items[taskIndex].finished = !currList.items[taskIndex].finished;
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        if(currList.items[taskIndex].finished == true){
            moveTaskToBottom(this.parentNode, currList);
        }else{
            moveTaskToTop(this.parentNode, currList);
        }
    }

    return{
        deleteTask, saveTask, toggleFinishedFlag, 
    }
})();

export {editTask};