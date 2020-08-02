const addTaskFromModal = (() => {
    const addTask = (e) => {
        e.preventDefault();
        console.log('aaa');
    }

    return{
        addTask, 
    }
})();

export {addTaskFromModal};