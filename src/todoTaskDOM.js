import {todo} from './todoManipulation';
import {taskModal} from './taskModal';

const todoTaskDOM = (() => {
    const lists = document.querySelector('#tasks');
    const _deleteListView = () =>{
        let child = tasks.lastChild;
        while(child){
            tasks.removeChild(child);
            child = tasks.lastChild;
        }
    }
    let currentList;
    const renderListTasks = () => {
        _deleteListView();
        //console.log(event.target);
        const listName = event.target.textContent;
        //console.log(listName);
        const list = document.createElement('div');
        list.classList.add('taskItem');
        const listHeader = document.createElement('div');
        listHeader.classList.add('taskHeader');
        const h2 = document.createElement('h2');
        h2.textContent = listName;
        listHeader.appendChild(h2);
        const span = document.createElement('span');
        span.classList.add('add');
        span.addEventListener('click', taskModal.showModal);
        span.innerHTML = `<i class="fas fa-plus-circle"></i>`;
        listHeader.appendChild(span);
        list.appendChild(listHeader);

        //insert tasks
        //console.log(listName, todo.getList(listName).getItems());
        const tasks = todo.getList(listName).getItems();
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            taskDiv.innerHTML = `<input type="checkbox" class="checkbox" id="${task.getTitle()}" value="${task.getTitle()}">`
            const p = document.createElement('p');
            p.innerText = task.getTitle();
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

