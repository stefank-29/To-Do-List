import {todo} from './todoManipulation'

const todoDOM = (() => {
    const renderLists = () => {
        const ul = document.querySelector('#listsList');
        let lists = todo.getLists(); // citati iz localStorage-a
        lists.forEach(list => {
            const li = document.createElement('li');
            //console.log(list.getName().replace(" ", "").toLowerCase());
            li.setAttribute('id', list.getName().replace(" ", "").toLowerCase());
            li.textContent = list.getName();
            ul.appendChild(li);
        })
    }

    return {
        renderLists, 
    }

})();

export {todoDOM};