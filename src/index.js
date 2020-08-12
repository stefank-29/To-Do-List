//? logika  
//kasnije
//TODO all tasks
//TODO filters
//TODO kad obrisem aktivnu listu prikazati sve liste
//TODO drag and drop (za liste proci kroz sve li i dodati u novi niz)
//todo ako je prazan ls napuniti ga na pocetku (da ne puca - default lista)
//TODO printanje liste

//pozadina
//todo promena pozadine
//todo README.md

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
