//? logika
//!1
//todo srediti drag tackice
//todo delete/edit list  
//!2
//todo task info
//todo edit taska
//todo brisanje taska
//!3
//todo efekti za taskove (prioritet i kad se doda)

//meni


//kasnije
//todo ako je prazan ls napuniti ga na pocetku
//TODO drag and drop
//TODO printanje liste

//check box
//todo check box custom
//pozadina
//todo promena pozadine

import {ToDoItem} from './todoItem';
import {List} from './todoList';
import {todo} from './todoInitialLists';
import {todoMenuDOM} from './todoMenuDOM';

function callRenderFunctions(){
    todo.setListsToStorage();
    todoMenuDOM.renderLists();
    todoMenuDOM.renderShortcuts();
    
}

window.onload = callRenderFunctions();



// testiranje
// let data = {
//     title : 'Zvezda',
//     description : 'asdas',   
//     dueDate : 'dsadsa',
//     priority: 'dsad',
//     note: 'dasdas',
// }
// let data2 = {
//     title : 'Stefan',
//     description : 'Nesto',
//     dueDate : '123a',
//     priority: 'dsa61161d',
//     note: 'daaaa',
// }

// let item1 = ToDoItem(data);
// let item2 = ToDoItem(data2);
// let list = List('Default list');
// list.addItem(item1);
// list.addItem(item2);
// const items = list.getItems();
//window.print();