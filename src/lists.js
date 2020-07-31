const List = (listName) => {
    let name = listName;
    let items = [];
    const getName = () => name;
    const editName = (newName) => {name = newName};
    const getItems = () => items;
    const addItem = (item) => {items.push(item)};
    const removerItem = (item) =>{
        // logic to find item and delete
    }
    return{
        getName, editName, getItems, addItem,
    }
}

export {List};