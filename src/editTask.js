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

    function toggleFinishedFlag() {
        const currList = todoTaskDOM.getCurrentList();
        const taskIndex = this.parentNode.dataset.index;
        currList.items[taskIndex].finshed = !currList.items[taskIndex].finshed;
        
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        console.log(currList.items[taskIndex].finshed);
    }

    return{
        deleteTask, saveTask, toggleFinishedFlag, 
    }
})();

export {editTask};