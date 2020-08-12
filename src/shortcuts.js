import {todo} from './todoInitialLists';
import {todoTaskDOM} from './todoTaskDOM';

const shortcuts = (() => {
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
        _deleteListView();
        lists.forEach(list => {
            todoTaskDOM.renderListTasks(undefined, list.getName(), true);
        });
        _deactiveAllLists();
    }


    return{
        showAllTasks, 
    }

})();

export {shortcuts};