//? logika
//!2
//todo task info (pop up)
//todo edit taska
//todo brisanje taska
//!3
//todo selektovati vise taskova sa shft + click
//todo efekti za taskove (prioritet i kad se doda fadeInBottom)

//meni



//kasnije
//TODO kad obrisem aktivnu listu prikazati sve liste
//TODO drag and drop (za liste proci kroz sve li i dodati u novi niz)
//todo ako je prazan ls napuniti ga na pocetku (da ne puca - default lista)
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
