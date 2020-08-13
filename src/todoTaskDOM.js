import {todo} from './todoInitialLists';
import {taskModalDOM} from './taskModalDOM';
import {addQuickTask} from './addQuickTask';
import {taskInfoDOM} from './taskInfoDOM';
import {editTask} from './editTask';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { shortcuts } from './shortcuts';


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
    function _activeList(activeListName) {
        const lists = document.querySelector('#listsList');
        lists.querySelectorAll('li').forEach(list => {
            if(list.querySelector('p').textContent === activeListName){
                list.classList.add('active');
            }
        });
    }
    function _deactiveAllLists(ul) {
        const lists = ul.querySelectorAll('li');
        lists.forEach(list => {
            list.classList.remove('active');
        })
    }

    function renderListTasks(event, listTitle, flag) {
        if(flag !== true){
            _deleteListView();
            shortcuts.setAllTasks(false);
            //console.log(shortcuts.getAllTasks());
        }

        let listName;
       
        if(this.tagName === "LI"){ //ako sam kliknuo na meni
            _deactiveAllLists(this.parentNode);
            this.classList.add('active');
        }

        if(event !== undefined){ // ako sam kliknuo u meniju
            listName = this.firstChild.textContent;
        }else{
            listName = listTitle;  // nakon dodavanja
            _activeList(listName);
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
        const tasks = todo.getList(listName).getItems(); //iz local storage-a
        const listTasks = document.createElement('div');
        listTasks.classList.add('listTasks');
        let i = 0;
        tasks.forEach(task => {
            // if(task.dueDate !== ''){
            //     console.log(formatDistanceToNow(new Date(task.dueDate), { addSuffix: true }));
            // }
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskDiv');
            taskDiv.addEventListener('click', taskInfoDOM.showInfo);
            taskDiv.setAttribute('data-index', i++);
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', task.title);
            checkbox.setAttribute('value', task.title);
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('click', editTask.toggleFinishedFlag);
            
            const p = document.createElement('p');
            p.textContent = task.title;
            if(task.priority === 'low'){
                p.style.borderBottom = '3px solid rgb(22, 127, 197)';
            }else if(task.priority === 'medium'){
                p.style.borderBottom = '3px solid rgb(71, 185, 25)';
            }else if(task.priority === 'high'){
                p.style.borderBottom = '3px solid rgb(211, 153, 27)';
            }else if(task.priority === 'urgent'){
                p.style.borderBottom = '3px solid rgb(221, 53, 23)';
            }
           
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(p);

            if(task.dueDate !== '' && task.finished === false){
                const timeRemaining = document.createElement('div');
                timeRemaining.classList.add('timeRemaining');
                timeRemaining.textContent = formatDistanceToNow(new Date(task.dueDate), { addSuffix: true });
                taskDiv.appendChild(timeRemaining);
            }

            if(task.finished == true){  // ubacim x ikonicu 
                checkbox.checked = true;
                taskDiv.classList.add('finished');
                const span = document.createElement('span');
                span.classList.add('crossIcon');
                const cross = document.createElement('i');
                cross.classList.add('fas', 'fa-times-circle');
                span.addEventListener('click', function(){editTask.deleteTaskOnCross(this.parentNode.dataset.index);});
                span.appendChild(cross);
                taskDiv.appendChild(span);
                p.style.border = 'none';
                
            }else{
                checkbox.checked = false;
            }
            listTasks.appendChild(taskDiv);
        });
        list.appendChild(listTasks);

        //quick task
        const quickTask = document.createElement('div');
        quickTask.classList.add('quickTask');
        const input = document.createElement('input');
        input.classList.add('quickTaskInput');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '50');
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
        renderListTasks, getCurrentList, _deactiveAllLists, currentList,
    }

})();
export {todoTaskDOM};

