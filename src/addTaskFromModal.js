import {ToDoItem} from './todoItem';
import {todoTaskDOM } from './todoTaskDOM';
import {taskModalDOM} from './taskModalDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todo} from './todoInitialLists';
import {shortcuts} from './shortcuts';

const addTaskFromModal = (() => {

    function addTask(listName, type) {
        event.preventDefault();
        const title = document.querySelector('#title');
        const selectList = document.querySelector('#listSelect')
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');
        const priority = document.querySelector('#priority');
        const note = document.querySelector('#note');
        const btnAddTask = document.querySelector('#addTask');
        //console.log(selectList);
        const data = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value,
            note: note.value,
        }
        if(btnAddTask.classList.contains('enabled') && selectList == null){

            const task = ToDoItem(data);
            //const currList = todoTaskDOM.getCurrentList();
            const currList = todo.getList(listName);
            currList.addItem(task);
            localStorage.setItem('lists', JSON.stringify(todo.lists));

            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            taskModalDOM.exitModalOnButton(); // iskljuciti prozor
             //render liste
            if(type === 'today'){
                shortcuts.showAllTasks(type);
            }else if(type === '7days'){
                shortcuts.showAllTasks(type);
            }else if(shortcuts.getAllTasks() === false){
               todoTaskDOM.renderListTasks(undefined, currList.getName()); //render liste
            }else{
               shortcuts.showAllTasks();
            }
        }else if(btnAddTask.classList.contains('enabled') && selectList !== null){
            if(selectList.value !== ''){
                type = document.querySelector('#menuAddTask').dataset.type;
                const task = ToDoItem(data);
                const currList = todo.getList(selectList.value);
                currList.addItem(task);
                localStorage.setItem('lists', JSON.stringify(todo.lists));

                todoMenuDOM.renderLists();
                todoMenuDOM.renderShortcuts();
                taskModalDOM.exitModalOnButton(); // iskljuciti prozor
                //render liste
                if(type === 'today'){
                    shortcuts.showAllTasks(type);
                }else if(type === '7days'){
                    shortcuts.showAllTasks(type);
                }else if(shortcuts.getAllTasks() === false){
                   todoTaskDOM.renderListTasks(undefined, currList.getName()); //render liste
                }else{
                   shortcuts.showAllTasks();
                }
        
            }else{
                selectList.style.backgroundColor = 'rgba(156, 54, 54, 0.4)';
            }
        }else{
            title.style.backgroundColor = 'rgba(156, 54, 54, 0.4)';
        }      
    }

    return{
        addTask, 
    }
})();

export {addTaskFromModal};