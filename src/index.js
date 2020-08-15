//? logika  
//TODO printanje liste i (task infa mozda)  

//pozadina 
//todo srediti default liste i taskove
//todo promena pozadine
//todo README.md
//todo okacitit na TOP

//TODO mozda prioriteti


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
