let index = 1;

function addToTask(){
    // getting the element
    const inputEl = document.getElementById("input");
    // getting the value
    let textValue = inputEl.value.trim();

    if(textValue === ""){
        alert("Please enter something!!");
        return;
    }

    // getting the parent element
    const parent = document.getElementById("container");

    // create a new element
    const newTask = document.createElement('div');
    newTask.setAttribute("id", "task-" + index);  // element in memory

    // checkbox
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox"); 
    checkBox.setAttribute("id", "task-"+ index + "-checkbox"); 
    checkBox.style.marginRight = "10px";
    checkBox.addEventListener("click", function(){
        if (checkBox.checked) {
            textBox.style.textDecoration = "line-through";
            textBox.style.color = "grey";
        }
        else{
            textBox.style.textDecoration = "none";
            textBox.style.color = "white";
        }
    });
    
    // textbox
    const textBox = document.createElement("input")
    textBox.setAttribute("type", "text");
    textBox.setAttribute("id", "task-" + index + "-textbox");
    textBox.setAttribute("value", textValue);
    textBox.style.background = "black";
    textBox.style.color = "white";

    // update 
    const edit = document.createElement("button")
    edit.style.marginLeft = "10px";
    edit.textContent = "EDIT";
    edit.setAttribute("id", "task-" + index + "-edit");
    edit.style.borderRadius = "30px";
    edit.addEventListener("click", function(){
        let newValue = prompt("Enter the value you want to update?");
        if (newValue !== null && newValue.trim() !== "") {
            textValue.value = newValue;
        }
    });

    // remove
    const remove = document.createElement("button")
    remove.style.marginLeft = "10px";
    remove.textContent = "REMOVE";
    remove.setAttribute("id", "task-" + index + "-remove");
    remove.style.borderRadius = "30px";
    remove.addEventListener("click", function(){
        parent.removeChild(newTask);
        updateRestIds();
    });
    
    // appending checkbox , taskbox, edit and remove to newtask
    newTask.appendChild(checkBox);
    newTask.appendChild(textBox);
    newTask.appendChild(edit);
    newTask.appendChild(remove);

    // appending the new element to parent
    parent.appendChild(newTask);

    // increment index
    index++;

    // clear the input
    inputEl.value = "";
}

// while an element is removed the rest of the element should be handled correctly
// incase of no duplication of ids

function updateRestIds(){
    const tasks = document.querySelectorAll("#container > div");  // getting all the children 

    tasks.forEach((task, i) =>{
        const newIndex = i + 1;
        task.setAttribute("id", "task-" + newIndex);
        

        const checkBox = task.querySelector("input[type='checkbox']");
        if(checkBox !== null){
            checkBox.setAttribute("id", "task-" + newIndex + "-checkbox");
        }    
        
        const textBox = task.querySelector("input[type='text']");
        if(textBox !== null){
            textBox.setAttribute("id", "task-" + newIndex + "-textbox");
        }

        const editBtn = task.querySelector("button[id*='edit']");
        if(editBtn !== null){
            editBtn.setAttribute("id", "task-" + newIndex + "-edit"); 
        }

        const removeBtn = task.querySelector("button[id*='remove']");
        if(removeBtn !== null){
            removeBtn.setAttribute("id", "task-" + newIndex + "-remove");
        }
    });

    // new index value
    index = tasks.length + 1;
}

// `button[id*='edit']`: This selector targets any <button> element that has an id attribute containing the substring 'edit'.