import {todo} from './todoInitialLists'
import {todoTaskDOM} from './todoTaskDOM';
import { List } from './todoList';
let JSONfn = require('json-fn');

const todoMenuDOM = (() => {
    const renderLists = () => {
        const ul = document.querySelector('#listsList');
        let lists = todo.getLists(); // citati iz localStorage-a
        let listsFromStorage = [];
        lists.forEach(list => {
            listsFromStorage.push(List(list.name, list.items)); //ubacujem liste iz ls
        })
        //console.log(listsFromStorage);
        
         listsFromStorage.forEach(list => {
              const li = document.createElement('li');
              li.setAttribute('id', list.getName().replace(" ", "").toLowerCase());
              li.textContent = list.getName();
              ul.appendChild(li);
              li.addEventListener('click', todoTaskDOM.renderListTasks);
          })

    }
    const renderShortcuts = () => {
        const li1 = document.createElement('li');
        li1.textContent = 'Today';
        li1.setAttribute('id', 'today');
        const li2 = document.createElement('li');
        li2.textContent = 'Next 7 days';
        li2.setAttribute('id', 'sevenDays');
        const li3 = document.createElement('li');
        li3.textContent = 'All tasks';
        li3.setAttribute('id', 'allTasks');
        const ul = document.querySelector('#shortcutsList');
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

    }

    return {
        renderLists,  renderShortcuts,
    }



})();

export {todoMenuDOM};