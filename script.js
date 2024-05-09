(() => {
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = "";

    });
    ul.addEventListener("click", (event) => {
        let id = event.target.getAttribute("data-id");
        if(!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(itemId, toDoItem){
        const li =document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem){
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray);
    }
    
    function removeItemFromDOM(id){
        var li = document.querySelector(`[data-id="${id}"]`);
        ul.removeChild(li);
    }
    
    function removeItemFromArray(id){
        toDoListArray = toDoListArray.filter(item => item.itemIdid!== id);
        console.log(toDoListArray);
    }

})(); //Creates a private scope