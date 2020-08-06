const List = (listName, listItems) => {
    let name = listName;
    let items;
    
    if(listItems !== undefined){
        items = [...listItems];
    }else{
        items = [];
    }
    function getName(){
       return name;
    }
    const _getLists = () => {
        let retrivedData = localStorage.getItem("lists");
        return JSON.parse(retrivedData);
    };

    function editName(newName) { name = newName};
    const getItems = () => items;
    const getItemsNumber = () => items.length;
    const addItem = (item) => {
        items.unshift(item);
        // loaclstg
        // localStorage.setItem('lists', JSON.stringify(lists));

    };
    const removeItem = (itemName) =>{
        const index = items.findIndex(item => {
            return item.getName().toLowerCase() === itemName.toLowerCase(); 
        })
        items.splice(index, 1);
        //local storage
    }
    return {
        getName ,editName, getItems, getItemsNumber, addItem, removeItem, name, items
        
    }
}

export {List};