import {todo} from './todoInitialLists';
import {taskModalDOM} from './taskModalDOM';
import {addQuickTask} from './addQuickTask';

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

    function _upButtonStyle(e) {
        const input = this;
        const button = this.parentNode.querySelector('.up');   
        if(input.value !== ''){
            button.classList.add('enabled');
            input.classList.add('enabled'); 
            if(e.key === 'Enter'){
                addQuickTask.addTaskOnEnter(input);
            }
        }else{
            button.classList.remove('enabled');
            input.classList.remove('enabled');
        }
        
    }
    function _deactiveAllLists(ul) {
        const lists = ul.querySelectorAll('li');
        lists.forEach(list => {
            list.classList.remove('active');
        })
    }

    function renderListTasks(event, listTitle) {
        _deleteListView();
        let listName;
        //console.log(this.tagName === "LI");
        if(this.tagName === "LI"){ //ako sam kliknuo na meni
            _deactiveAllLists(this.parentNode);
            this.classList.add('active');
        }

        if(event !== undefined){ // ako sam kliknuo u meniju
            listName = event.target.textContent;
        }else{
            listName = listTitle;  // nakon dodavanja
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

        //insert task
        // let retrivedData = localStorage.getItem('lists');
        // const liste  = JSON.parse(retrivedData);
        // console.log(liste);
        const tasks = todo.getList(listName).getItems(); //iz local storage-a
        const listTasks = document.createElement('div');
        listTasks.classList.add('listTasks');
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', task.title);
            checkbox.setAttribute('value', task.title);
            checkbox.classList.add('checkbox');
            const p = document.createElement('p');
            p.innerText = task.title;
            taskDiv.append(checkbox);
            taskDiv.appendChild(p);
            listTasks.appendChild(taskDiv);
        });
        list.appendChild(listTasks);

        //quick task
        const quickTask = document.createElement('div');
        quickTask.classList.add('quickTask');
        const input = document.createElement('input');
        input.classList.add('quickTaskInput');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Click to quickly add task');
        input.addEventListener('change', _upButtonStyle);
        input.addEventListener('keydown', _upButtonStyle);
        input.addEventListener('keyup', _upButtonStyle);
        const span2 = document.createElement('span');
        const arrowUp = document.createElement('i');
        arrowUp.classList.add('fas');
        arrowUp.classList.add('fa-arrow-circle-up');
        span2.appendChild(arrowUp);
        span2.classList.add('up');
        span2.addEventListener('click', addQuickTask.addTask);
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

