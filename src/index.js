//? logika
//TODO drag and drop
//TODO printanje liste


//? izgled
//todo check box custom
//todo promena pozadine
//todo padajuci meni na klik na strelicu
//todo sakrivanje menija

import {ToDoItem} from './todoObjects';
import {List} from './todoList';
import {todo} from './todoManipulation';
import {todoMenuDOM} from './todoDOM';

function callRenderFunctions(){
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