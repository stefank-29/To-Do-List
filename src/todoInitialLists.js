import {ToDoItem} from './todoItem';
import {List} from './todoList';
//let JSONfn = require('json-fn');
//za testiranje
let data = {
    title : 'Task',
    description : 'opis',   
    dueDate : '2020-08-17',
    priority: 'medium',
    note: 'nesto',
}
let data2 = {
         title : 'Zadatak',
         description : 'Nesto',
         dueDate : '2020-08-15',
         priority: 'high',
         note: 'daaaa',
}
let data3 = {
    title : 'Zadatak novi',
    description : 'Nesto',
    dueDate : '2020-08-14',
    priority: 'high',
    note: 'daaaa',
}
let data4 = {
    title : 'Kupiti nesto',
    description : 'Nesto',
    dueDate : '2020-08-14',
    priority: 'urgent',
    note: 'daaaa',
}


const todo = (() => {
    let personal = List('Personal');
    let work = List('Work');
    let groceryStore = List('Grocery store');
    let item1 = ToDoItem(data);
    let item2 = ToDoItem(data2);
    let item3 = ToDoItem(data3);
    let item4 = ToDoItem(data4);
    personal.addItem(item1);
    personal.addItem(item2);
    personal.addItem(item4);
    work.addItem(item3);
    work.addItem(item2);
    work.addItem(item1);
    groceryStore.addItem(item3);
    groceryStore.addItem(item2);
    groceryStore.addItem(item1);
    groceryStore.addItem(item4);

    

    let lists = [personal, work, groceryStore];

    function setListsToStorage() {
        //localStorage.clear(); // ovde samo jednom ucitati na pocetku (ako je prazno)
        lists = getLists();  //ovo ne treba kad je prazno
        localStorage.setItem('lists', JSON.stringify(lists));
       
    }
    const getLists = () => {
        let retrivedData = localStorage.getItem("lists");
        if(retrivedData !== undefined && retrivedData !== null){
            let listsFromStorage = JSON.parse(retrivedData); //lista samo sa podacima
            lists.length = 0;
            listsFromStorage.forEach(l => {
                lists.push(List(l.name, l.items)); // svaki put pravim novu listu
            })
        }
        return lists;
    
    };
    
    const addList = (list) => {
        lists = getLists();
        lists.push(list);
        localStorage.setItem('lists', JSON.stringify(lists));
    }
    function getList (listName) {  
        //lists = getLists();
        return lists.find(list => {
            return list.getName().toLowerCase() === listName.toLowerCase();
        })
    }
    function getListIndex (listName) {  
        return lists.findIndex(list => {
            return list.getName().toLowerCase() === listName.toLowerCase();
        })
    }
    const removeListByName = (listName) =>{
        //lists = getLists(); 
        const index = lists.findIndex(item => {
            return item.getName().toLowerCase() === listName.toLowerCase();
        })
        lists.splice(index, 1);
        //localStorage.setItem('lists', JSON.stringify(lists));
    }
    function removeListByIndex(index) {
        lists.splice(index, 1);
    }
    return {
        getLists, addList, removeListByName, getList, 
        setListsToStorage, getListIndex, removeListByIndex, lists,
    }
})();

export {todo};