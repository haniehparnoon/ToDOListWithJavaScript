const form = document.getElementById("task-form");
console.log(form)
form.addEventListener('submit', addTask);

i_elements = document.querySelector("ul.list-group");
i_elements.addEventListener('click', clearTasks)

function clearTasks(e){
    if( e.target.className.search("delete-item") != -1  ){
        e.target.parentElement.remove();
    }
}

function addTask(e){
   inputTask = document.getElementById("task")
   theInput = inputTask.value
   
   
   if(theInput == ''){
       alert("add an input")
   }
   else{
        confirm_task = confirm("Are you sure?")
        if (confirm_task){
           
            tag_i = document.createElement("i")
            tag_i.className = "fas fa-times text-danger mr-auto delete-item"

            const li = document.createElement("li");
            const node = document.createTextNode(theInput);
            console.log(li)
            li.appendChild(node);
            
            li.className = "list-group-item d-flex justify-content-between"
            
            li.appendChild(tag_i);

            ul = document.querySelector(".list-group")
            ul.appendChild(li)
        }


   }
    e.preventDefault()
}

function remove_all() {
    p = document.querySelector('ul');
    if (p) {
        while (p.firstChild) {
          p.removeChild(p.firstChild);
        }
      }
  }