import {todo} from './todoInitialLists'
import {todoTaskDOM} from './todoTaskDOM';
import { List } from './todoList';
import { taskModalDOM } from './taskModalDOM';
import {listModalDOM} from './listModalDOM';
import {editList} from './editList';
import { editListModalDOM } from './editListModalDOM';
import {shortcuts} from './shortcuts';

const todoMenuDOM = (() => {

    function _toggleMenu() {
        const lists = document.querySelector('#listsList');
        const shortcuts = document.querySelector('#shortcutsList');
        const editIcons = document.querySelector('#icons');
        //const filters = document.querySelector('#listsList');

        if(this.getAttribute('id') == 'lists'){
            lists.classList.toggle('hide');
            if(lists.classList.contains('hide')){
                setTimeout(function(){lists.style.display = 'none'}, 500);
            }else{
                lists.style.display = 'block';
              
            }
            editIcons.classList.toggle('hide');
        }else if(this.getAttribute('id') == 'shortcuts'){
            shortcuts.classList.toggle('hide');
            if(shortcuts.classList.contains('hide')){
                setTimeout(function(){shortcuts.style.display = 'none'}, 500);
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
    function _toggleOverlay() {
        const menu = document.querySelector('#menu');
        menu.querySelectorAll('.menu-item').forEach(item => {
            if(!item.classList.contains('notOverlay')){
                item.classList.toggle('overlayed');
            }
        });
    }
    function changeDataIndices(){
        const lists = document.querySelector('#listsList');
        let i = 0;
        lists.querySelectorAll('li').forEach(list => {
            list.dataset.index = i++;
        });
    }


    function _editableLists() {
        //console.log(this.getAttribute('id'));
        const list = document.querySelector('#listsList');
        const listItems = list.querySelectorAll('li');
        const header = document.querySelector('#listsHeader');
        _toggleOverlay();
         // x i stikla u hederu
        header.classList.toggle('editable');
        if(header.classList.contains('editable')){// izgled hedera
            header.lastElementChild.classList.add('hide');
            header.removeChild(header.querySelector('.arrow'));// brisem strelicu

            const icons = document.createElement('div');
            icons.setAttribute('id', 'editIcons');
            const cross = document.createElement('i');
            cross.classList.add('fas', 'fa-times');
            cross.classList.add('editIcon', 'editHeader');
            cross.setAttribute('id', 'cross');
            cross.addEventListener('click', editList.cancelEdit);
            cross.addEventListener('click', _editableLists);
            const check = document.createElement('i');
            check.classList.add('fas', 'fa-check');
            check.classList.add('editIcon','editHeader');
            check.setAttribute('id', 'check');
            check.addEventListener('click', editList.saveEdit);
            check.addEventListener('click', _editableLists);

            icons.appendChild(cross);
            icons.appendChild(check);
            header.appendChild(icons);
        }else{
            header.removeChild(header.lastElementChild); // brisem x i /
            header.lastElementChild.classList.remove('hide');// prikazem edit i plus       
            const span = document.createElement('span');
            span.classList.add('arrow');
            span.setAttribute('id', 'lists');
            span.addEventListener('click', _toggleMenu);
            const arrow = document.createElement('i');
            arrow.classList.add('fas', 'fa-chevron-up');
            span.appendChild(arrow);
            header.insertBefore(span, header.lastElementChild);
        }
        if(this.getAttribute('id') === 'edit'){
            listItems.forEach(item => { //prolazim kroz sve li
                item.classList.toggle('editable');
                if(item.classList.contains('editable')){
                    //dodavanje drag i edit ikonice
                    item.removeChild(item.lastChild);
                    const dragIcon = document.createElement('i');
                    dragIcon.classList.add('fas');
                    dragIcon.classList.add('fa-bars');
                    dragIcon.classList.add('dragIcon');
                    item.insertBefore(dragIcon, item.firstChild);
                    const editIcon = document.createElement('img');
                    editIcon.setAttribute('src', './images/edit.svg');
                    editIcon.classList.add('editIcon');
                    editIcon.addEventListener('click', editListModalDOM.showModal);
                    item.appendChild(editIcon);
                    item.removeEventListener('click', todoTaskDOM.renderListTasks);
                }else{// vracanje broja taskova
                    item.removeChild(item.firstChild);
                    item.removeChild(item.lastChild);
                    const span = document.createElement('span');
                    span.classList.add('taskNumber');
                    span.textContent = `${todo.getList(item.textContent).items.length}`
                    item.appendChild(span);
                    item.addEventListener('click', todoTaskDOM.renderListTasks);
                
                }
            });
        }
    }


    const renderLists = () => {
        const ul = document.querySelector('#listsList');
        let lists = todo.getLists(); // citati iz localStorage-a
        _deleteMenu(ul);
        let i = 0;
        lists.forEach(list => {
              const li = document.createElement('li');
              li.setAttribute('id', list.getName().replace(" ", "").toLowerCase());
              const p = document.createElement('p');
              p.textContent = list.getName();
              //li.textContent = list.getName();
              const span = document.createElement('span');
              span.classList.add('taskNumber');
              span.textContent = `${list.getItems().length}`;
              li.setAttribute('data-index', i++);
              li.appendChild(p);
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
        li3.addEventListener('click', shortcuts.showAllTasks);
        const ul = document.querySelector('#shortcutsList');
        _deleteMenu(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

    }

    function getActiveListName() {
        const ul = document.querySelector('#listsList');
        let listName;
        ul.querySelectorAll('li').forEach(list => {
            if(list.classList.contains('active')){
                listName = list.querySelector('p').textContent;
                todoTaskDOM.currentList = list;
            }
        });
        return listName;

    }

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', _toggleMenu);
    })  

    document.querySelector('#menuAddTask').addEventListener('click', function(){taskModalDOM.showModal(this, undefined)});
    document.querySelector('#menuBars').addEventListener('click', _hideMenu);
    
    document.querySelector('#addList').addEventListener('click', listModalDOM.showModal);
    document.querySelector('#edit').addEventListener('click', _editableLists);
    

    return {
        renderLists,  renderShortcuts, getActiveListName, 
        _editableLists, changeDataIndices,
    }



})();

export {todoMenuDOM};