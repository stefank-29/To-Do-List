import {editList} from './editList';

const editListModalDOM = (()=>{
    const container = document.querySelector('#tasksContainer');
    let modalBg;
    let oldlistName;
    let li;

    function _createListStyle() {
        const input = this;
        const button = document.querySelector('#saveList');
        input.style.backgroundColor = '';
        if(input.value !== ''){
            button.classList.add('enabled');
            if(event.key === 'Enter'){
                editList.saveList(li, oldlistName, input.value);
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
        li = this.parentNode;
        console.log(this.parentNode, this.parentNode.textContent);
        oldlistName = this.parentNode.textContent;
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
        form.style.width = '95%';
        form.setAttribute('onkeydown', `return event.key != 'Enter';`);

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
        listTitle.value = `${oldlistName}`;
        setTimeout(function(){listTitle.focus();}, 500); 

        const buttons = document.createElement('div');
        buttons.setAttribute('id', 'modalButtons');
        //buttons.classList.add('#modalButtons');
        const deleteList = document.createElement('button');
        deleteList.textContent = 'Delete';
        deleteList.setAttribute('id', 'deleteList');
        deleteList.addEventListener('click', editList.deleteList);
        //deleteList.addEventListener('click', exitModalOnButton);
        const saveList = document.createElement('button');
        saveList.textContent = 'Save';
        saveList.setAttribute('id', 'saveList');
        saveList.addEventListener('click',function(){ editList.saveList(li, oldlistName, listTitle.value)});
        //saveList.addEventListener('click', function(){addListFromModal.addList(listTitle)})


        buttons.appendChild(deleteList);
        buttons.appendChild(saveList);
       
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

export {editListModalDOM}