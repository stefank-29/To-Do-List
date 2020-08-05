import {todo} from './todoInitialLists'
import {todoTaskDOM} from './todoTaskDOM';
import { List } from './todoList';
import { taskModalDOM } from './taskModalDOM';
import {listModalDOM} from './listModalDOM';
//let JSONfn = require('json-fn');

const todoMenuDOM = (() => {

    function _toggleMenu() {
        const lists = document.querySelector('#listsList');
        const shortcuts = document.querySelector('#shortcutsList');
        const editIcons = document.querySelector('#icons');
        //const filters = document.querySelector('#listsList');

        if(this.getAttribute('id') == 'lists'){
            lists.classList.toggle('hide');
            if(lists.classList.contains('hide')){
                setTimeout(function(){lists.style.display = 'none'}, 400);
            }else{
                lists.style.display = 'block'
            }
            editIcons.classList.toggle('hide');
        }else if(this.getAttribute('id') == 'shortcuts'){
            shortcuts.classList.toggle('hide');
            if(shortcuts.classList.contains('hide')){
                setTimeout(function(){shortcuts.style.display = 'none'}, 400);
            }else{
                shortcuts.style.display = 'block';
            }
        }
        
        this.firstChild.classList.toggle('fa-chevron-down');
        this.firstChild.classList.toggle('fa-chevron-up');

    }

    function _deleteMenu(menuUl) {
        const items = menuUl.querySelectorAll('li');
        items.forEach(item => {
            item.parentNode.removeChild(item);
        })
        
    }

    function _hideMenu() {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hide');
        menu.querySelectorAll('.menu-item').forEach(item => {
            if(!item.classList.contains('notHide')){
                item.classList.toggle('hide');
            }else{
                item.classList.toggle('minimize');
            }
            if(item.getAttribute('id') == 'add' && item.classList.contains('minimize')){
               item.querySelector('button').innerHTML = `<i class="fas fa-plus"></i>`;
            }else if(item.getAttribute('id') == 'add' && !item.classList.contains('minimize')){
               item.querySelector('button').innerHTML = `<i class="fas fa-plus"></i> Create a task`;
                
            }
          
        });
    }


    const renderLists = () => {
        const ul = document.querySelector('#listsList');
        let lists = todo.getLists(); // citati iz localStorage-a
        _deleteMenu(ul);
        lists.forEach(list => {
              const li = document.createElement('li');
              li.setAttribute('id', list.getName().replace(" ", "").toLowerCase());
              li.textContent = list.getName();
              const span = document.createElement('span');
              span.classList.add('taskNumber');
              span.textContent = `${list.getItems().length}`
              li.appendChild(span);
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
        _deleteMenu(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

    }

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', _toggleMenu);
    })  

    document.querySelector('#menuAddTask').addEventListener('click', taskModalDOM.showModal);
    document.querySelector('#menuBars').addEventListener('click', _hideMenu);
    
    document.querySelector('#addList').addEventListener('click', listModalDOM.showModal);
    //document.querySelector('edit', nesto);

    
    return {
        renderLists,  renderShortcuts,
    }



})();

export {todoMenuDOM};