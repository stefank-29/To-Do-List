
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

        form.setAttribute('autocomplete', 'off');




        modal.appendChild(form);
        modal.appendChild(buttons);



        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);

        container.appendChild(modalBg);

    }

    return {
        showInfo, 
    }
})();

export {taskInfoDOM} 