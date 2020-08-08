import {editTask} from './editTask';
import {todo} from './todoInitialLists';
import {todoTaskDOM} from './todoTaskDOM';
const taskInfoDOM = (() => {
    const container = document.querySelector('#tasksContainer');
    let modalBg;

    function _exitModal(event) {
        if(event.target !== this){
            return;
        }
        modalBg.parentNode.removeChild(modalBg);
    }
    function exitModalOnButton() {
        modalBg.parentNode.removeChild(modalBg);

    }

    function _saveListStyle(e) {
        const input = this;
        const button = document.querySelector('#saveTask');
        input.style.backgroundColor = '';
        if(input.value !== ''){
            button.classList.add('enabled');
        }else{
            button.classList.remove('enabled');
        }
    }

    function showInfo(e) {
        //console.log(this);
        if(e.target.tagName === 'INPUT'){ // ako kliknem na checkbox
            return;
        }
        const taskTitle = this.querySelector('p').textContent;
        const index = this.dataset.index;
        const task = todoTaskDOM.getCurrentList().items[index];
        

        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'taskInfo');
        modal.style.transform = `translateX(-50%) translateY(-50%) scale(0.1)`;
        const form = document.createElement('form');
        // header
        const header = document.createElement('div');   
        header.setAttribute('id', 'header');
        const h2 = document.createElement('h2');
        h2.textContent = 'TASK DETAILS';
        header.appendChild(h2);
        modal.appendChild(header);



        //buttons
        const buttons = document.createElement('div');
        buttons.setAttribute('id', 'taskButtons');
        //buttons.classList.add('#modalButtons');
        const deleteTask = document.createElement('button');
        deleteTask.textContent = 'Delete';
        deleteTask.setAttribute('id', 'deleteTask');
        deleteTask.addEventListener('click', function() {editTask.deleteTask(index)});
        const saveTask = document.createElement('button');
        saveTask.textContent = 'Save';
        saveTask.setAttribute('id', 'saveTask');
        saveTask.classList.add('enabled');
        //saveTask.addEventListener('click', function(){editTask.saveTask(task, inputData)})
        buttons.appendChild(deleteTask);
        buttons.appendChild(saveTask);

        //form
        //title
        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('id', 'title');
        inputTitle.setAttribute('size', '20');
        inputTitle.setAttribute('placeholder', 'Task name');
        inputTitle.setAttribute('maxlength', '50');
        inputTitle.addEventListener('change', _saveListStyle);
        inputTitle.addEventListener('keydown', _saveListStyle);
        inputTitle.addEventListener('keyup', _saveListStyle);

        inputTitle.value = `${taskTitle}`;
        setTimeout(function(){inputTitle.focus();}, 500); // fokus
        //description
        const desc = document.createElement('p');
        desc.textContent = 'Description:';
        const inputDescription = document.createElement('input');
        inputDescription.setAttribute('type', 'text');
        inputDescription.setAttribute('id', 'description');
        inputDescription.setAttribute('size', '20');
        inputDescription.value = task.description;
        //dueDate
        const date = document.createElement('p');
        date.textContent = 'Due date:';
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dueDate');
        inputDate.setAttribute('name', 'dueDate');
        inputDate.value = task.dueDate;

        //priority
        const priority = document.createElement('p');
        priority.textContent = 'Priority:'
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
        
        if(task.priority != ''){
            select.value = task.priority;
        }
        //note
        const note = document.createElement('p');
        note.textContent = 'Note:';
        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'note');
        textarea.setAttribute('cols', '20');
        textarea.setAttribute('rows', '5');
        textarea.value = task.note;

        form.setAttribute('autocomplete', 'off');
        // append to form
        form.appendChild(inputTitle);
        form.appendChild(desc);
        form.appendChild(inputDescription);
        form.appendChild(date);
        form.appendChild(inputDate);
        form.appendChild(priority); 
        form.appendChild(select);
        form.appendChild(note);
        form.appendChild(textarea);


        modal.appendChild(form);
        modal.appendChild(buttons);

        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);

        container.appendChild(modalBg);

        saveTask.addEventListener('click', function(){
            let inputData = {
                title: inputTitle.value,
                description: inputDescription.value,
                dueDate: inputDate.value,
                priority: select.value,
                note: textarea.value,
            };
            editTask.saveTask(task, inputData)});
    }

    return {
        showInfo, exitModalOnButton,
    }
})();

export {taskInfoDOM} 