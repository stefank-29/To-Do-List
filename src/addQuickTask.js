import {ToDoItem} from './todoItem';
import {todoTaskDOM} from './todoTaskDOM';
import {todoMenuDOM} from './todoMenuDOM';
import { todo } from './todoInitialLists';
const addQuickTask = (() => {
    
    function addTask() {
        const input = this.parentNode.querySelector('.quickTaskInput');
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priotity: '',
            note: '',
        }
        if(this.classList.contains('enabled')){
            const task = ToDoItem(data);
            const list = todoTaskDOM.getCurrentList();
            list.addItem(task);// cuvam u local storage
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoTaskDOM.renderListTasks(undefined, list.getName());
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
        
        }
    }

    function addTaskOnEnter(inp) {
        const input = inp;
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priotity: '',
            note: '',
        }
        const task = ToDoItem(data);
        const list = todoTaskDOM.getCurrentList();
        list.addItem(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoTaskDOM.renderListTasks(undefined, list.getName());
        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
    }

    return {
        addTask, addTaskOnEnter,
    }

})();

export {addQuickTask};