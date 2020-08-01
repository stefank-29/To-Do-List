const List = (listName) => {
    let name = listName;
    let items = [];
    const getName = () => name;
    const editName = (newName) => {name = newName};
    const getItems = () => items;
    const addItem = (item) => {items.push(item)};
    const removeItem = (itemName) =>{
        const index = items.findIndex(item => {
            return item.getName().toLowerCase === itemName.toLowerCase; 
        })
    }
    return{
        getName, editName, getItems, addItem, removeItem,
    }
}

export {List};