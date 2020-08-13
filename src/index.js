//? logika  
//kasnije
//TODO all tasks kad se doda novi task razlika
//TODO today
//TODO next 7 days

//*kasnije
//TODO kad obrisem aktivnu listu prikazati sve liste
//TODO drag and drop (za liste proci kroz sve li i dodati u novi niz)
//todo ako je prazan ls napuniti ga na pocetku (da ne puca - default lista)
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
