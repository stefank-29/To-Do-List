import {editTask} from './editList';

const taskInfoDOM = (() => {
    const container = document.querySelector('#tasksContainer');
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

    function showInfo(e) {
        //console.log(this);
        const taskTitle = this.querySelector('p').textContent;

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
        //deleteTask.addEventListener('click', exitModalOnButton);
        const saveTask = document.createElement('button');
        saveTask.textContent = 'Save';
        saveTask.setAttribute('id', 'saveTask');
        //saveTask.addEventListener('click', function(){addListFromModal.addList(listTitle)})
        buttons.appendChild(deleteTask);
        buttons.appendChild(saveTask);

        //form
        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('id', 'title');
        inputTitle.setAttribute('size', '20');
        inputTitle.setAttribute('placeholder', 'Task name');
        inputTitle.setAttribute('maxlength', '50');
        inputTitle.value = `${taskTitle}`;
        setTimeout(function(){inputTitle.focus();}, 500); // fokus

        const desc = document.createElement('p');
        desc.textContent = 'Description';
        const inputDescription = document.createElement('input');
        inputDescription.setAttribute('type', 'text');
        inputDescription.setAttribute('id', 'description');
        inputDescription.setAttribute('size', '20');
        
        
        const date = document.createElement('p');
        date.textContent = 'Due date';
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dueDate');
        inputDate.setAttribute('name', 'dueDate');

        const note = document.createElement('p');
        note.textContent = 'Note';
        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'note');
        textarea.setAttribute('cols', '20');
        textarea.setAttribute('rows', '5');
        

        form.setAttribute('autocomplete', 'off');
        // append to form
        form.appendChild(inputTitle);
        form.appendChild(desc);
        form.appendChild(inputDescription);
        form.appendChild(date);
        form.appendChild(inputDate);
        form.appendChild(note);
        form.appendChild(textarea);



        modal.appendChild(form);
        modal.appendChild(buttons);



        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);

        container.appendChild(modalBg);

    }

    return {
        showInfo, exitModalOnButton,
    }
})();

export {taskInfoDOM} 