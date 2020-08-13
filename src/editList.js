import {todo} from './todoInitialLists';
import {List} from './todoList';
import {editListModalDOM} from './editListModalDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {addTaskFromModal} from './addTaskFromModal';
import {shortcuts} from './shortcuts';

const editList = (() => {


    function saveList(listMenu, oldName, newName) {
        const index = listMenu.dataset.index;
        const list = todo.lists[index]; 

        list.name = newName;
        listMenu.childNodes[1].textContent = newName;
        editListModalDOM.exitModalOnButton();

        
    }

    function deleteList(list){
        const index = list.dataset.index;
        list.parentNode.removeChild(list); // uklanjam iz menija
        todoMenuDOM.changeDataIndices(); // menjam data-indexe
        todo.removeListByIndex(index); 
        editListModalDOM.exitModalOnButton();


    }

    function _saveListsOrder() {
        const listsList = document.querySelector('#listsList');
        const listsLi = listsList.querySelectorAll('li');
        let lists = [];
        listsLi.forEach(list => {
            lists.push(todo.lists[list.dataset.index]);
        });
        todo.lists.length = 0;

        lists.forEach(list => {
            todo.lists.push(list);
        });

    }

    function saveEdit() {
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        const activeListName = todoMenuDOM.getActiveListName();

        _saveListsOrder();
        if(activeListName !== undefined){ // ako je aktivna lista
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            todoTaskDOM.renderListTasks(undefined, activeListName);

        }else{
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoMenuDOM.renderLists();
            shortcuts.showAllTasks();
        }

        
    }

    function cancelEdit() {
        todoMenuDOM.renderLists(); // cita se iz local storage-a                                
    }                              // pa se ne cuva edit

    return{
        saveList, deleteList, saveEdit, cancelEdit
    }
})();

export {editList};