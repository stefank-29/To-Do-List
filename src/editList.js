import {todo} from './todoInitialLists';
import {List} from './todoList';
import {editListModalDOM} from './editListModalDOM';
const editList = (() => {


    function saveList(listMenu, oldName, newName) {
        const list = todo.getList(oldName); //! citati iz trenutnih lista
        //console.log(list.name);
        console.log(listMenu);
        list.name = newName;
        console.log(list.name);
        console.log(todo.lists);
        //samo da promenim ime u listi
        listMenu.childNodes[1].textContent = newName;
        //pamcenje tek kad kliknem na check
        //localStorage.setItem('lists', JSON.stringify(todo.lists));
        editListModalDOM.exitModalOnButton();

        
    }

    function deleteList(listName){

    }

    function saveEdit() {

    }

    function cancelEdit() {

    }

    return{
        saveList, deleteList, saveEdit, cancelEdit
    }
})();

export {editList};