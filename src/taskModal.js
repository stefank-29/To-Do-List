const taskModal = (() => {
    const container = document.querySelector('#tasksContainer');
    const taskDiv = document.querySelector('.taskItem');
    let modalBg;
    const _exitModal = () => {
        modalBg.parentNode.removeChild(modalBg);
    }

    const showModal = (e) => {
        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modalBg.appendChild(modal);
        modalBg.addEventListener('click', _exitModal);
        container.appendChild(modalBg);
        modal.style.transform = `translateX(-${e.pageX/3+30}px) translateY(-${e.pageY-50}px) scale(0.1)`;
        // console.log(event.offsetX, event.offsetY);
         console.log(e.pageX, e.pageY);
    };

    return{
        showModal, 
    }
})();

export {taskModal}