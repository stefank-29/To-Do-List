import {ToDoItem} from './todoItem';
import {List} from './todoList';
//let JSONfn = require('json-fn');
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

/*
/upisivanje u ls
localStorage.setItem("MyLibrary", JSON.stringify(myLibrary));

/citanje iz ls-a
let retrivedData = localStorage.getItem("MyLibrary");
myLibrary = JSON.parse(retrivedData);



*/

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

    function setListsToStorage() {
        //localStorage.clear();
        lists = getLists();  //ovo ne treba kad je prazno
        localStorage.setItem('lists', JSON.stringify(lists));
       
    }
    const getLists = () => {
        let retrivedData = localStorage.getItem("lists");
        let listsFromStorage = JSON.parse(retrivedData); //lista samo sa podacima
        lists.length = 0;
        listsFromStorage.forEach(l => {
            lists.push(List(l.name, l.items)); // svaki pu pravim novu listu
        })
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
    const removeList = (listName) =>{
        lists = getLists(); 
        const index = lists.findIndex(item => {
            return item.getName().toLowerCase() === listName.toLowerCase();
        })
        lists.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify(lists));
    }
    return {
        getLists, addList, removeList, getList, setListsToStorage, lists,
    }
})();

export {todo};