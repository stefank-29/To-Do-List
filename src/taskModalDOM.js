import {addTaskFromModal} from './addTaskFromModal';
import {todo} from './todoInitialLists';
const taskModalDOM = (() => {
    const container = document.querySelector('#tasksContainer');
    const taskDiv = document.querySelector('.taskItem');
    let modalBg;

    function _exitModal(event) {
        if(event.target !== this){
            return;
        }
       // modalBg.style.transform = `translateX(-${event.pageX/3+30}px) translateY(-${event.pageY-50}px) scale(0.1)`;
        modalBg.parentNode.removeChild(modalBg);
    }
    function exitModalOnButton() {
        modalBg.parentNode.removeChild(modalBg);

    }
    function _btnAddStyle(e) {
        const title = document.querySelector('#title');
        const button = document.querySelector('#addTask');
        title.style = ``;
        if(title.value !== ''){
            button.classList.add('enabled');
        }else{
            button.classList.remove('enabled');
        }
    }

    function showModal(button, listName, type){
        //console.log(this.getAttribute('id') == 'menuAddTask');
        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        //task modal
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modal.style.transform = `translateX(-50%) translateY(-50%) scale(0.1)`;
        const form = document.createElement('form');
        form.setAttribute('autocomplete', 'off');
        const inputTitle = document.createElement('input');
        inputTitle.addEventListener('change', _btnAddStyle);
        inputTitle.addEventListener('keyup', _btnAddStyle);
        inputTitle.addEventListener('keydown', _btnAddStyle);
        setTimeout(function(){inputTitle.focus();}, 500); 
        //inputTitle.addEventListener('click', _btnAddStyle);
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('id', 'title');
        inputTitle.setAttribute('size', '20');
        inputTitle.setAttribute('placeholder', 'Task name');
        inputTitle.setAttribute('maxlength', '50');
        //if add task from menu
        let selectList;
        if(button.getAttribute('id') === 'menuAddTask'){
            selectList = document.createElement('select');
            selectList.setAttribute('id', 'listSelect');
            const pHolder = document.createElement('option');
            pHolder.setAttribute('selected', 'selected');
            pHolder.setAttribute('hidden', 'hidden');
            pHolder.setAttribute('disabled', 'disabled');
            pHolder.setAttribute('value', '');
            pHolder.textContent = 'Choose list:';
            selectList.appendChild(pHolder);
            const liste = todo.getLists();
            liste.forEach(lista => {
                const option = document.createElement('option');
                option.setAttribute('value', lista.getName());
                option.textContent = lista.getName();
                selectList.appendChild(option);
            })
            modal.style.height = '60rem';
            selectList.addEventListener('click', function(){selectList.style = '';});
            selectList.addEventListener('mousedown', function(){selectList.style = '';});
        }

       

        /***********************************/
        const inputDescription = document.createElement('input');
        inputDescription.setAttribute('type', 'text');
        inputDescription.setAttribute('id', 'description');
        inputDescription.setAttribute('size', '20');
        inputDescription.setAttribute('placeholder', 'Description');
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dueDate');
        inputDate.setAttribute('name', 'dueDate');
        const select = document.createElement('select');
        select.setAttribute('id', 'priority');
        const placeHolder = document.createElement('option');
        placeHolder.setAttribute('selected', 'selected');
        placeHolder.setAttribute('hidden', 'hidden');
        placeHolder.setAttribute('disabled', 'disabled');
        placeHolder.setAttribute('value', '');
        placeHolder.textContent = 'Priority';
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'low');
        option1.textContent = 'Low';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'medium');
        option2.textContent = 'Medium';
        const option3 = document.createElement('option');
        option3.setAttribute('value', 'high');
        option3.textContent = 'High';
        const option4 = document.createElement('option');
        option4.setAttribute('value', 'urgent');
        option4.textContent = 'Urgent';
        select.appendChild(placeHolder);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'note');
        textarea.setAttribute('cols', '20');
        textarea.setAttribute('rows', '5');
        textarea.setAttribute('placeHolder', 'Note');
        const btnAddTask = document.createElement('button');
        btnAddTask.setAttribute('id', 'addTask');
        btnAddTask.textContent = 'Add task';
        btnAddTask.addEventListener('click', function() {addTaskFromModal.addTask(listName, type)});
        form.appendChild(inputTitle);
        if(button.getAttribute('id') === 'menuAddTask'){
            form.appendChild(selectList);
        }
        form.appendChild(inputDescription);
        form.appendChild(inputDate);
        form.appendChild(select);
        form.appendChild(textarea);
        form.appendChild(btnAddTask);
        modal.appendChild(form);

        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);
        
        container.appendChild(modalBg);


    };

    return{
        showModal, exitModalOnButton,
    }
})();

export {taskModalDOM}