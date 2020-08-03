import {ToDoItem} from './todoItem';
import {todoTaskDOM} from './todoTaskDOM';
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
            list.addItem(task); //todo mozda najbolje ovde
            todoTaskDOM.renderListTasks(undefined, list.getName());
            //todo sacuvati u local storage
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
        todoTaskDOM.renderListTasks(undefined, list.getName());
    }

    return {
        addTask, addTaskOnEnter,
    }

})();

export {addQuickTask};