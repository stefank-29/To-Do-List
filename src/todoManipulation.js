import {ToDoItem} from './todoObjects';
import {List} from './lists';

const todo = (() => {
    let personal = List('Personal');
    let work = List('Work');
    let groceryStore = List('Grocery store');
    let lists = [personal, work, groceryStore];
    const getLists = () => lists;
    const addList = (list) => {
        lists.push(list);
    }
    const removeList = (listName) =>{
        const index = lists.findIndex(item => {
            return item.getName().toLowerCase() === listName.toLowerCase();
        })
        lists.splice(index, 1);
        // sacuvati u local storage-u
    }
    return {
        getLists, addList, removeList, work,
    }
})();

export {todo};