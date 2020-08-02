const List = (listName) => {
    let name = listName;
    let items = [];
    const getName = () => name;
    const editName = (newName) => {name = newName};
    const getItems = () => items;
    const getItemsNumber = () => items.length;
    const addItem = (item) => {items.unshift(item)};
    const removeItem = (itemName) =>{
        const index = items.findIndex(item => {
            return item.getName().toLowerCase() === itemName.toLowerCase(); 
        })
        items.splice(index, 1);
    }
    return{
        getName, editName, getItems, getItemsNumber, addItem, removeItem,
    }
}

export {List};