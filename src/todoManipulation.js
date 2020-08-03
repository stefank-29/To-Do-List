import {ToDoItem} from './todoItem';
import {List} from './todoList';
//za testiranje
let data = {
    title : 'Zvezda',
    description : 'opis',   
    dueDate : 'datum',
    priority: 'hitno',
    note: 'nesto',
}
let data2 = {
         title : 'Stefan',
         description : 'Nesto',
         dueDate : 'datum',
         priority: 'dsa61161d',
         note: 'daaaa',
}

const todo = (() => {
    let personal = List('Personal');
    let work = List('Work');
    let groceryStore = List('Grocery store');
    let item1 = ToDoItem(data);
    let item2 = ToDoItem(data2);
    let item3 = ToDoItem(data);
    personal.addItem(item1);
    personal.addItem(item2);
    work.addItem(item3);
    work.addItem(item2);
    groceryStore.addItem(item2);
    groceryStore.addItem(item1);


     
    let lists = [personal, work, groceryStore];
    const getLists = () => lists;
    const addList = (list) => {
        lists.push(list);
    }
    const getList = (listName) => {
        return lists.find(list => {
            return list.getName().toLowerCase() === listName.toLowerCase();
        })
    }
    const removeList = (listName) =>{
        const index = lists.findIndex(item => {
            return item.getName().toLowerCase() === listName.toLowerCase();
        })
        lists.splice(index, 1);
        // sacuvati u local storage-u
    }
    return {
        getLists, addList, removeList, getList,
    }
})();

export {todo};