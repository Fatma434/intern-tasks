let tasks =[];


// add function 
function addTask(){
let input =document.getElementById("taskInput");
let task = input.value.trim();
// if empty nothing happen 
if(task === "") return ;

tasks.push(task);
// clear input 
input .value ="";
console.log(tasks);
showTask();
}

function deleteTask(index){
    tasks.splice(index ,1);
    showTask()

}



// show list of tasks 
function showTask(){
    let list = document.getElementById("taskList");
    console.log(tasks)
list.innerHTML ="";
    for(let i=0 ; i<tasks.length; i++){
        list.innerHTML+= `<li>
        
        ${tasks[i]}
        <button onClick="deleteTask(${i})">
        Delete</button>

        </li>`
    }
}