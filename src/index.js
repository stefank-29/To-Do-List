//pozadina 
//todo README.md
//todo okacitit na TOP
import {ToDoItem} from './todoItem';
import {List} from './todoList';
import {todo} from './todoInitialLists';
import {todoMenuDOM} from './todoMenuDOM';
import {shortcuts} from './shortcuts';
import {changeBackground} from './changeBackground';

function callRenderFunctions(){
    todo.setListsToStorage();
    todoMenuDOM.renderLists();
    todoMenuDOM.renderShortcuts();
    shortcuts.showAllTasks(); // ucitam na pocetku sve taskove
    changeBackground.change();
}

window.onload = callRenderFunctions();
