import {addListFromModal} from './addListFromModal';

const listModalDOM = (()=>{
    const container = document.querySelector('#tasksContainer');
    let modalBg;


    function _createListStyle(e) {
        const input = this;
        const button = document.querySelector('#createList');
        input.style.backgroundColor = '';
        if(input.value !== ''){
            button.classList.add('enabled');
            if(e.key === 'Enter'){
                addListFromModal.addList(input);
            }
        }else{
            button.classList.remove('enabled');
        }


    }
    function _exitModal(event) {
        if(event.target !== this){
            return;
        }
        modalBg.parentNode.removeChild(modalBg);
    }
    function exitModalOnButton() {
        modalBg.parentNode.removeChild(modalBg);
    }

    function showModal() {

        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        modalBg.addEventListener('click', _exitModal);
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modal.style.transform = `translateX(-50%) translateY(-50%) scale(0.1)`;
        modal.style.width = '40rem';
        modal.style.height = '15rem';
        const form = document.createElement('form');
        form.setAttribute('autocomplete', 'off');
        form.style.width = '95%'

        const listTitle = document.createElement('input');
        listTitle.addEventListener('change', _createListStyle);
        listTitle.addEventListener('keydown', _createListStyle);
        listTitle.addEventListener('keyup', _createListStyle);
        listTitle.addEventListener('mousedown', _createListStyle);
        listTitle.setAttribute('type', 'text');
        listTitle.setAttribute('id', 'title');
        listTitle.setAttribute('size', '20');
        listTitle.setAttribute('placeholder', 'List name');
        listTitle.setAttribute('maxlength', '23');
        listTitle.style.width = '100%';
        listTitle.style.margin = '0';
        setTimeout(function(){listTitle.focus();}, 500); 

        const buttons = document.createElement('div');
        buttons.setAttribute('id', 'modalButtons');
        //buttons.classList.add('#modalButtons');
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.setAttribute('id', 'cancel');
        cancelButton.addEventListener('click', exitModalOnButton);
        const createList = document.createElement('button');
        createList.textContent = 'Create';
        createList.setAttribute('id', 'createList');
        createList.addEventListener('click', function(){addListFromModal.addList(listTitle)})


        buttons.appendChild(cancelButton);
        buttons.appendChild(createList);
       
        form.appendChild(listTitle);

        modal.appendChild(form);
        modal.appendChild(buttons);
        modalBg.appendChild(modal);

        container.appendChild(modalBg);
    }

    return{
        showModal, exitModalOnButton,
    }

})();

export {listModalDOM}