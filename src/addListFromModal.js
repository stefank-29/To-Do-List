import {listModalDOM} from './listModalDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {List} from './todoList';
import {todo} from './todoInitialLists';
const addListFromModal = (() => {

    function addList(input) {
        event.preventDefault();
        const listName = input.value;
        const create = document.querySelector('#createList');

        if(create.classList.contains('enabled')){
            const list = List(listName, []);
            todo.addList(list);
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            
            listModalDOM.exitModalOnButton();
        }else{
            input.style.backgroundColor = 'rgba(156, 54, 54, 0.4)';
        }
    



    }

    return{
        addList, 
    }
})();

export {addListFromModal};