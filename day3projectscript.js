const a_btn =() =>{
    const new_task = document.getElementById("new_task").value;

    if(!(new_task  == "")){
        
        const new_div  = document.createElement("div")
        new_div.classList.add("tasks")
        
        const task = document.createElement("span");
        task.textContent = new_task;
        task.classList.add("task");   

        const d_btn = document.createElement("button");
        d_btn.id = "d_btn"
        d_btn.textContent = "Done";
        d_btn.classList.add("d_btn");

        new_div.appendChild(task);
        new_div.appendChild(d_btn);

        document.getElementById("tasks_div").appendChild(new_div);

        document.getElementById("new_task").value = "";

        d_btn.addEventListener('click',()=>{
            new_div.remove();
        });
}
    
}

add.addEventListener('click', a_btn);

const delete_btn = () =>{
    
}