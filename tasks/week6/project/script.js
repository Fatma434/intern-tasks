let trans = JSON.parse(localStorage.getItem ("trans")
||"[]")


function saveData(){
    localStorage.setItem("trans",JSON.stringify(trans));

} 


function display(){
let total = 0;
document.getElementById("list").innerHTML="";
trans.forEach(t=>{
    let li = document.createElement("li");
    li.textContent =`${t.type}:$${t.amount}`;
    document.getElementById("list").append(li);
    total+=t.type === "income" ? t.amount :-t.amount;
});
document.getElementById("total").textContent= total;

document.getElementById("btn").onclick = function (){
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("type").value;
    if(!amount) return ;
    trans.push({amount ,type});
    saveData();
    display()
    document.getElementById("amount").value ="";

}

}


display();
// function render() {
    //   let total = 0;
    //   document.getElementById("list").innerHTML = "";
    //   transactions.forEach(t => {
    //     let li = document.createElement("li");
    //     li.textContent = `${t.type}: $${t.amount}`;
    //     document.getElementById("list").appendChild(li);
    //     total += t.type === "income" ? t.amount : -t.amount;
    //   });
    //   document.getElementById("total").textContent = total;
    // }

    // document.getElementById("addBtn").onclick = function() {
    //   let amount = parseFloat(document.getElementById("amount").value);
    //   let type = document.getElementById("type").value;
    //   if (!amount) return alert("Enter an amount!");
    //   transactions.push({ amount, type });
    //   saveData();
    //   render();
    //   document.getElementById("amount").value = "";
    // };

    // render();