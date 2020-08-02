import {todo} from './todoManipulation';
import {taskModalDOM} from './taskModalDOM';

const todoTaskDOM = (() => {
    const lists = document.querySelector('#tasks');
    let currentList; // trenutna lista

    const _deleteListView = () =>{
        let child = tasks.lastChild;
        while(child){
            tasks.removeChild(child);
            child = tasks.lastChild;
        }
    }

    const renderListTasks = (event, listTitle) => {
        _deleteListView();
        let listName;
        if(event !== undefined){ // ako sam kliknuo u meniju
            listName = event.target.textContent;
        }else{
            listName = listTitle;
        }
        
        // header
        const list = document.createElement('div');
        list.classList.add('listItem');
        const listHeader = document.createElement('div');
        listHeader.classList.add('listHeader');
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
        const listTasks = document.createElement('div');
        listTasks.classList.add('listTasks');
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
            listTasks.appendChild(taskDiv);
        });
        list.appendChild(listTasks);

        const quickTask = document.createElement('div');
        quickTask.classList.add('quickTask');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Click to quickly add task');
        const span2 = document.createElement('span');
        const arrowUp = document.createElement('i');
        arrowUp.classList.add('fas');
        arrowUp.classList.add('fa-arrow-circle-up');
        span2.appendChild(arrowUp);
        span2.classList.add('up');
        quickTask.appendChild(input);
        quickTask.appendChild(span2);
        list.appendChild(quickTask);

        lists.appendChild(list);
        currentList = todo.getList(listName);
    }

    const getCurrentList = () => currentList;
    return{
        renderListTasks, getCurrentList,
    }

})();
export {todoTaskDOM};

