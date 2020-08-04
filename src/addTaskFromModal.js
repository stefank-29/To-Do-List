import {ToDoItem} from './todoItem';
import {todoTaskDOM } from './todoTaskDOM';
import {taskModalDOM} from './taskModalDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todo} from './todoInitialLists'
const addTaskFromModal = (() => {

    function addTask(e) {
        e.preventDefault();
        //console.log(this);
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
            priotity: priority.value,
            note: note.value,
        }
        if(btnAddTask.classList.contains('enabled') && selectList == null){
            const task = ToDoItem(data);
            const currList = todoTaskDOM.getCurrentList();
            currList.addItem(task);
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            taskModalDOM.exitModalOnButton(); // iskljuciti prozor
             //render liste
            todoTaskDOM.renderListTasks(undefined, currList.getName()); //render liste
        }else if(btnAddTask.classList.contains('enabled') && selectList !== null){
            if(selectList.value !== ''){
                const task = ToDoItem(data);
                const currList = todo.getList(selectList.value);
                currList.addItem(task);
                localStorage.setItem('lists', JSON.stringify(todo.lists));
                todoMenuDOM.renderLists();
                todoMenuDOM.renderShortcuts();
                taskModalDOM.exitModalOnButton(); // iskljuciti prozor
                //render liste
                //todoTaskDOM.renderListTasks(undefined, currList.getName()); //render liste
        
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