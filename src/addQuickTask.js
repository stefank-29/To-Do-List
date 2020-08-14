import {ToDoItem} from './todoItem';
import {todoTaskDOM} from './todoTaskDOM';
import {todoMenuDOM} from './todoMenuDOM';
import { todo } from './todoInitialLists';
import {shortcuts} from './shortcuts';
const addQuickTask = (() => {
    
    function addTask(span, type){
        
        const input = span.parentNode.querySelector('.quickTaskInput');
        const currListName = span.parentNode.getAttribute('id');
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priority: '',
            note: '',
        }
        if(span.classList.contains('enabled')){
            const task = ToDoItem(data);
            //const list = todoTaskDOM.getCurrentList();
            const list = todo.getList(currListName);
            list.addItem(task);// cuvam u local storage
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            if(type === 'today'){
                shortcuts.showAllTasks(type);
            }else if(type === '7days'){
                shortcuts.showAllTasks(type);
            }else if(shortcuts.getAllTasks() === false){
              todoTaskDOM.renderListTasks(undefined, list.getName());
            }else{
                shortcuts.showAllTasks();
            }
        }
    }

    function addTaskOnEnter(inp) {
        const input = inp;
        const currListName = inp.parentNode.getAttribute('id');
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priority: '',
            note: '',
        }
        const task = ToDoItem(data);
        const list = todo.getList(currListName);
        //const list = todoTaskDOM.getCurrentList();
        list.addItem(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.getName());
        }else{
            shortcuts.showAllTasks();
        }
       
    }

    return {
        addTask, addTaskOnEnter,
    }

})();

export {addQuickTask};