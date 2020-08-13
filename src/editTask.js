import {taskInfoDOM} from './taskInfoDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {todo} from './todoInitialLists';
import {shortcuts} from './shortcuts';

const editTask = (() => {

    function deleteTask(taskIndex, listName) {
        //const currList = todoTaskDOM.getCurrentList(); //!sredi
        const currList = todo.getList(listName);
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
        }else{
            shortcuts.showAllTasks();
        }
        taskInfoDOM.exitModalOnButton();
    }

    function deleteTaskOnCross(taskIndex, listName) {
        //const currList = todoTaskDOM.getCurrentList();
        const currList = todo.getList(listName);
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();

        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
        }else{
            shortcuts.showAllTasks();
        }
    }

    function saveTask(task, data, listName) {
        const inputTitle = document.querySelector('#title');
        const button = document.querySelector('#saveTask')
        //const currList = todoTaskDOM.getCurrentList(); //!sredi
        const currList = todo.getList(listName); 


        if(button.classList.contains('enabled')){// ako je aktivno dugme
            task.title = data.title;
            task.description = data.description;
            task.dueDate = data.dueDate;
            task.priority = data.priority;
            task.note = data.note;

            localStorage.setItem('lists', JSON.stringify(todo.lists));
            if(shortcuts.getAllTasks() === false){
                todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
            }else{
                shortcuts.showAllTasks();
            }

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
        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.name);
        }else{
            shortcuts.showAllTasks();
        }
        
    }
    function _moveTaskToTop(taskDiv, list){
        const index = taskDiv.dataset.index;
        const task = list.getItems()[index];

        list.getItems().splice(index, 1);
        list.getItems().unshift(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.name);
        }else{
            shortcuts.showAllTasks();
        }
    }

    function toggleFinishedFlag(checkbox, listName) {
        const currList = todo.getList(listName);
        const taskIndex = checkbox.parentNode.dataset.index;
        currList.items[taskIndex].finished = !currList.items[taskIndex].finished;
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        if(currList.items[taskIndex].finished == true){
            _moveTaskToBottom(checkbox.parentNode, currList);
        }else{
            _moveTaskToTop(checkbox.parentNode, currList);
        }
    }

    function restoreTask(task, taskIndex, listName) {
        //const currList = todoTaskDOM.getCurrentList();//! getList()
        const currList = todo.getList(listName);
        currList.items[taskIndex].finished = !currList.items[taskIndex].finished;
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        if(currList.items[taskIndex].finished == true){
            _moveTaskToBottom(task, currList);
        }else{
            _moveTaskToTop(task, currList);
        }
        taskInfoDOM.exitModalOnButton();

        
    }

    return{
        deleteTask, saveTask, toggleFinishedFlag, deleteTaskOnCross,
        restoreTask, 
    }
})();

export {editTask};