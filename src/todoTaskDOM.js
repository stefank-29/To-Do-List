import {todo} from './todoManipulation';
import {taskModalDOM} from './taskModalDOM';

const todoTaskDOM = (() => {
    const lists = document.querySelector('#tasks');
    const _deleteListView = () =>{
        let child = tasks.lastChild;
        while(child){
            tasks.removeChild(child);
            child = tasks.lastChild;
        }
    }
    let currentList; // trenutna lista
    const renderListTasks = () => {
        _deleteListView();
        const listName = event.target.textContent;
        // header
        const list = document.createElement('div');
        list.classList.add('taskItem');
        const listHeader = document.createElement('div');
        listHeader.classList.add('taskHeader');
        const h2 = document.createElement('h2');
        h2.textContent = listName;
        listHeader.appendChild(h2);
        const span = document.createElement('span');
        span.classList.add('add');
        span.addEventListener('click', taskModalDOM.showModal);
        const plus = document.createElement('i');
        plus.classList.add('fas');
        plus.classList.add('fa-plus-circle');
        span.appendChild(plus);
        listHeader.appendChild(span);
        list.appendChild(listHeader);

        //insert tasks
        const tasks = todo.getList(listName).getItems();
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', task.getTitle());
            checkbox.setAttribute('value', task.getTitle());
            checkbox.classList.add('checkbox');
            const p = document.createElement('p');
            p.innerText = task.getTitle();
            taskDiv.append(checkbox);
            taskDiv.appendChild(p);
            list.appendChild(taskDiv);
        });

        lists.appendChild(list);
    }

    return{
        renderListTasks,
    }

})();
export {todoTaskDOM};

