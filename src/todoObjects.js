

const ToDoItem = (data) => {
    let title = data.title;
    let description = data.description;
    let dueDate = data.dueDate;
    let priority = data.priority;
    let note = data.note;
    const getTitle = () => {return title};
    const getDescription = () => {return description};
    const getDueDate = () => {return dueDate};
    const getPriority = () => {return priority};
    const getNote = () => {return note};
    const editTitle = (newTitle) => {title = newTitle};
    const editDescription = (newDescription) => {description = newDescription};
    const editDueDate = (newDueDate) => {dueDate = newDueDate};
    const editPriority = (newPriority) => {priority = newPriority};
    const editNote = (newNote) => {note = newNote};

    return {
        getTitle, getDescription, getDueDate, getPriority, getNote,
        editTitle, editDescription, editDueDate, editPriority, editNote,
        
    }
}

export {ToDoItem};