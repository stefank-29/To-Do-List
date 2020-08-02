import {ToDoItem} from './todoObjects';
const addTaskFromModal = (() => {
    
    
    const addTask = (e) => {
        e.preventDefault();
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');
        const priority = document.querySelector('#priority');
        const note = document.querySelector('#note');
        const btnAddTask = document.querySelector('#addTask');
        
        const data = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priotity: priority.value,
            note: note.value,
        }
        console.log(data);
        const task = ToDoItem(data);
        console.log(task);
        
    }

    return{
        addTask, 
    }
})();

export {addTaskFromModal};