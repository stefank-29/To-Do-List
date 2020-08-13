//? logika  
//TODO today (array.filter metoda)
//TODO next 7 days
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
import {shortcuts} from './shortcuts';

function callRenderFunctions(){
    todo.setListsToStorage();
    todoMenuDOM.renderLists();
    todoMenuDOM.renderShortcuts();
    shortcuts.showAllTasks(); // ucitam na pocetku sve taskove
}


window.onload = callRenderFunctions();
