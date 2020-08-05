const listModalDOM = (()=>{
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

    function showModal() {
        console.log('aaa');
        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        modalBg.addEventListener('click', _exitModal);
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modal.style.transform = `translateX(-50%) translateY(-50%) scale(0.1)`;
        modal.style.width = '30rem';
        modal.style.height = '15rem';
        const form = document.createElement('form');
        form.setAttribute('autocomplete', 'off');
        
        const listTitle = document.createElement('input');
        listTitle.setAttribute('type', 'text');
        listTitle.setAttribute('id', 'title');
        listTitle.setAttribute('size', '20');
        listTitle.setAttribute('placeholder', 'List name');
        listTitle.setAttribute('maxlength', '50');
        listTitle.style.width = '100%';
        listTitle.style.margin = '0';
        setTimeout(function(){listTitle.focus();}, 500); 


       



        form.appendChild(listTitle);

        modal.appendChild(form);
        modalBg.appendChild(modal);

        container.appendChild(modalBg);
    }

    return{
        showModal, exitModalOnButton,
    }

})();

export {listModalDOM}