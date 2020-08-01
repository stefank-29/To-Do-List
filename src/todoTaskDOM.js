import {todo} from './todoManipulation';

const todoTaskDOM = (() => {
    const tasks = document.querySelector('#tasks');
    const _deleteListView = () =>{
        let child = tasks.lastChild;
        while(child){
            tasks.removeChild(child);
            child = tasks.lastChild;
        }
    }

    const renderListTasks = (list) => {
        _deleteListView();
        //console.log(event.target);
        const listName = event.target.textContent;
        const list = document.createElement('div');
        list.classList.add('taskItem');
        const listHeader = document.createElement('div');
        listHeader.classList.add('listHeader');
        const h2 = document.createElement('h2');
        h2.textContent = listName;
        listHeader.appendChild(h2);
        list.appendChild(listHeader);
        //insert tasks
        const lista = todo.getList(listName);
        console.log(lista);

        tasks.appendChild(list);
    }

    return{
        renderListTasks,
    }

})();
export {todoTaskDOM};

