//? logika
//!1
//todo dva puta promena (cuvanje preko indeksa)
//todo delete
//!2
//todo task info
//todo edit taska
//todo brisanje taska
//!3
//todo efekti za taskove (prioritet i kad se doda)

//meni


//kasnije
//todo ako je prazan ls napuniti ga na pocetku
//TODO drag and drop (za liste proci kroz sve li i dodati u novi niz)
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
