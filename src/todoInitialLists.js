import {ToDoItem} from './todoItem';
import {List} from './todoList';
//let JSONfn = require('json-fn');
//za testiranje
let data = {
    title : 'Workout',
    description : 'Pushups and cardio',   
    dueDate : '2020-08-15',
    priority: 'medium',
    note: 'Cardio - bike or running for 30 minutes',
}
let data2 = {
         title : 'Shopping',
         description : 'Buy t-shirt and jeans',
         dueDate : '2020-08-16',
         priority: 'low',
         note: '',
}
let data3 = {
    title : 'Milk',
    description : '',
    dueDate : '2020-08-16',
    priority: 'medium',
    note: '',
}
let data4 = {
    title : 'Ice cream',
    description : 'With chocolate and vanilla',
    dueDate : '2020-08-15',
    priority: 'high',
    note: '',
}
let data5 = {
    title : 'Orange juice',
    description : '100% juice',
    dueDate : '2020-08-15',
    priority: 'low',
    note: 'Without sugar',
}
let data6 = {
    title : 'Send emails to IT companies',
    description : 'Ask for internship',
    dueDate : '2020-08-15',
    priority: 'urgent',
    note: '',
}
let data7 = {
    title : 'Finish JS project',
    description : 'Push to github',
    dueDate : '2020-08-15',
    priority: 'high',
    note: 'Add README.md',
}
let data8 = {
    title : 'Write CV',
    description : 'Add project from github to portfolio',
    dueDate : '2020-08-17',
    priority: 'high',
    note: '',
}


const todo = (() => {
    let personal = List('Personal');
    let work = List('Work');
    let groceryStore = List('Grocery store');
    let item1 = ToDoItem(data);
    let item2 = ToDoItem(data2);
    let item3 = ToDoItem(data3);
    let item4 = ToDoItem(data4);
    let item5 = ToDoItem(data5);
    let item6 = ToDoItem(data6);
    let item7 = ToDoItem(data7);
    let item8 = ToDoItem(data8);


    personal.addItem(item1);
    personal.addItem(item2);

    work.addItem(item7);
    work.addItem(item6);
    work.addItem(item8);
    groceryStore.addItem(item3);
    groceryStore.addItem(item4);
    groceryStore.addItem(item5);
    

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