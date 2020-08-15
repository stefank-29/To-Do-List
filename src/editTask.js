import {taskInfoDOM} from './taskInfoDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {todo} from './todoInitialLists';
import {shortcuts} from './shortcuts';

const editTask = (() => {

    function deleteTask(taskIndex, listName, type) {
        //const currList = todoTaskDOM.getCurrentList(); //!sredi
        const currList = todo.getList(listName);
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        if(type === 'today'){
            shortcuts.showAllTasks(type);
        }else if(type === '7days'){
            shortcuts.showAllTasks(type);
        }else if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, currList.name);//render liste
        }else{
           shortcuts.showAllTasks();
        }
        taskInfoDOM.exitModalOnButton();
    }

    function deleteTaskOnCross(taskName, listName, type) {
        //const currList = todoTaskDOM.getCurrentList();
        const currList = todo.getList(listName);
        const taskIndex = currList.getItemIndex(taskName);

        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();

        if(type === 'today'){
            shortcuts.showAllTasks(type);
        }else if(type === '7days'){
            shortcuts.showAllTasks(type);
        }else if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, currList.name);//render liste
        }else{
           shortcuts.showAllTasks();
        }
    }

    function saveTask(task, data, listName, type) {
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
            if(type === 'today'){
                shortcuts.showAllTasks(type);
            }else if(type === '7days'){
                shortcuts.showAllTasks(type);
            }else if(shortcuts.getAllTasks() === false){
                todoTaskDOM.renderListTasks(undefined, currList.name);//render liste
            }else{
               shortcuts.showAllTasks();
            }

            taskInfoDOM.exitModalOnButton();
        }else{
            inputTitle.style.backgroundColor = 'rgba(156, 54, 54, 0.4)';
        }

    }

    function _moveTaskToBottom(index, list, type) {
        //const index = taskDiv.dataset.index;
        const task = list.getItems()[index];
       
        list.getItems().splice(index, 1);
        list.getItems().push(task);  
        localStorage.setItem('lists', JSON.stringify(todo.lists));
       
        if(type === 'today'){
            shortcuts.showAllTasks(type);
        }else if(type === '7days'){
            shortcuts.showAllTasks(type);
        }else if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.name);//render liste
        }else{
           shortcuts.showAllTasks();
        }
        
    }
    function _moveTaskToTop(index, list, type){
        //const index = taskDiv.dataset.index;
        const task = list.getItems()[index];

        list.getItems().splice(index, 1);
        list.getItems().unshift(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        if(type === 'today'){
            shortcuts.showAllTasks(type);
        }else if(type === '7days'){
            shortcuts.showAllTasks(type);
        }else if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.name);//render liste
        }else{
           shortcuts.showAllTasks();
        }
    }

    function toggleFinishedFlag(checkbox, listName, type) {
        const currList = todo.getList(listName);
        //const taskIndex = checkbox.parentNode.dataset.index;//! kao za task info 
        const taskName = checkbox.parentNode.querySelector('p').textContent;
        const taskIndex = currList.getItemIndex(taskName);

        currList.items[taskIndex].finished = !currList.items[taskIndex].finished;
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        if(currList.items[taskIndex].finished == true){
            _moveTaskToBottom(taskIndex, currList, type);
        }else{
            _moveTaskToTop(taskIndex, currList, type);
        }
    }

    function restoreTask(task, taskInx, listName, type) {
        //const currList = todoTaskDOM.getCurrentList();//! getList()
        const currList = todo.getList(listName);
        const taskIndex = currList.getItemIndex(task.textContent);
        
        currList.items[taskIndex].finished = !currList.items[taskIndex].finished;
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        if(currList.items[taskIndex].finished == true){
            _moveTaskToBottom(taskIndex, currList, type);
        }else{
            _moveTaskToTop(taskIndex, currList, type);
        }
        taskInfoDOM.exitModalOnButton();

        
    }

    return{
        deleteTask, saveTask, toggleFinishedFlag, deleteTaskOnCross,
        restoreTask, 
    }
})();

export {editTask};