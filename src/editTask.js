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
    function deleteTaskOnCross(taskIndex) {
        const currList = todoTaskDOM.getCurrentList();
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        todoTaskDOM.renderListTasks(undefined, currList.name); 
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

    function _moveTaskToBottom(taskDiv, list) {
        const index = taskDiv.dataset.index;
        const task = list.getItems()[index];
        
        list.getItems().splice(index, 1);
        list.getItems().push(task);  
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoTaskDOM.renderListTasks(undefined, list.name);
        
    }
    function _moveTaskToTop(taskDiv, list){
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
        //this.parentNode.classList.toggle('finished');

        if(currList.items[taskIndex].finished == true){
            _moveTaskToBottom(this.parentNode, currList);
        }else{
            _moveTaskToTop(this.parentNode, currList);
        }
    }

    return{
        deleteTask, saveTask, toggleFinishedFlag, deleteTaskOnCross,
    }
})();

export {editTask};