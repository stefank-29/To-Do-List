import {todo} from './todoInitialLists'
import {todoTaskDOM} from './todoTaskDOM';
import { List } from './todoList';
//let JSONfn = require('json-fn');

const todoMenuDOM = (() => {

    function _toggleMenu() {
        const lists = document.querySelector('#listsList');
        const shortcuts = document.querySelector('#shortcutsList');
        //const filters = document.querySelector('#listsList');

        if(this.getAttribute('id') == 'lists'){
            lists.classList.toggle('hide');
        }else if(this.getAttribute('id') == 'shortcuts'){
            shortcuts.classList.toggle('hide');
        }

        this.firstChild.classList.toggle('fa-chevron-down');
        this.firstChild.classList.toggle('fa-chevron-up');

    }


    const renderLists = () => {
        const ul = document.querySelector('#listsList');
        let lists = todo.getLists(); // citati iz localStorage-a
        lists.forEach(list => {
              const li = document.createElement('li');
              li.setAttribute('id', list.getName().replace(" ", "").toLowerCase());
              li.textContent = list.getName();
            //   const span = document.createElement('span');
            //   span.classList.add('taskNumber');
            //   //console.log(list.getItems().length);
            //   span.textContent = `${list.getItems().length}`
            //   li.appendChild(span);
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

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', _toggleMenu);
    })


    return {
        renderLists,  renderShortcuts,
    }



})();

export {todoMenuDOM};