import {todo} from './todoInitialLists';
import {todoTaskDOM} from './todoTaskDOM';

const shortcuts = (() => {
    let allTasks = false;

    function _deactiveAllLists() {
        const ul = document.querySelector('#listsList');
        const lists = ul.querySelectorAll('li');
        lists.forEach(list => {
            list.classList.remove('active');
        })
    }
    function _deleteListView() {
        const lists = document.querySelector('#tasks');
        let child = lists.lastChild;
        while(child){
            lists.removeChild(child);
            child = lists.lastChild;
        }
    }
    
    function showAllTasks() {
        const lists = todo.getLists();
        allTasks = true;
        _deleteListView();
        lists.forEach(list => {
            todoTaskDOM.renderListTasks(undefined, list.getName(), true);
        });
        _deactiveAllLists();
    }
    function getAllTasks() {
        return allTasks;
    }
    function setAllTasks(bool){
        allTasks = bool;
    }

    return{
        showAllTasks, getAllTasks, setAllTasks, 
    }

})();

export {shortcuts};