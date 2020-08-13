//? logika  
//kasnije
//!kad se klikne na task izbaci info za pogresni
//!nece za finished task
//TODO all tasks - save, delete
//TODO today
//TODO next 7 days

//*kasnije
//TODO drag and drop (za liste proci kroz sve li i dodati u novi niz)
//todo ako je prazan ls napuniti ga na pocetku 
//todo ucitati na pocetku allTasks
//TODO printanje liste

//pozadina
//todo promena pozadine
//todo README.md
//todo okacitit na TOP

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
