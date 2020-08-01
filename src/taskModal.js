const taskModal = (() => {
    const container = document.querySelector('#tasksContainer');
    const taskDiv = document.querySelector('.taskItem');
    let modalBg;

    function _exitModal() {
        console.log(event.target, this);
        if(event.target !== this){
            return;
        }
        modalBg.parentNode.removeChild(modalBg);
    }

    function showModal(e){
        console.log(this.offsetTop, this.offsetLeft);
        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);
        
        
        container.appendChild(modalBg);
        //modal.style.transform = `translateX(-${this.offsetLeft-modal.offsetWidth/2}px) translateY(-${this.offsetTop}px) scale(0.1)`;

        modal.style.transform = `translateX(-${e.pageX/3+30}px) translateY(-${e.pageY-50}px) scale(0.1)`;
        //console.log(event.offsetX, event.offsetY);
        //console.log(e.pageX, e.pageY);
    };

    return{
        showModal, 
    }
})();

export {taskModal}