let btn= document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);

    console.log(inp.value);
    ul.appendChild(item);
    inp.value="";
});
 /*
let DeleteBtns = document.querySelectorAll(".delete");

for(DeleteBtn of DeleteBtns) {
    DeleteBtn.addEventListener("click" , function() {
       let par = DeleteBtn.parentElement;
       console.log(par);
       par.remove();
    });
}
*/


//Event Delegation---------

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    } 
});