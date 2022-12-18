let id = 0;

document.getElementById("add").addEventListener("click", () => { //Calling add id from html page
let createdDate = new Date(); //Date entered will be current date
let table = document.getElementById("list") //Reference to table id from html page
let row = table.insertRow(1); //Create new row
row.setAttribute("id", `item-${id}`); //Row attributes
row.insertCell(0).innerHTML = document.getElementById("new-task").value; //New row will be inserted with info from task bar
row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //New row w/yr month date format
row.insertCell(2).innerHTML = document.getElementById("new-start-date").value; //New row w/start date from html page
row.insertCell(3).innerHTML = document.getElementById("new-end-date").value; //New row w/end date from html page
row.insertCell(4).innerHTML = document.getElementById("new-start-time").value; //New row w/start time from html page
row.insertCell(5).innerHTML = document.getElementById("new-end-time").value; //New row w/end time from html page

let actions = row.insertCell(6);
actions.appendChild(createDeleteButton(id++)); //Delete id from html page so row can be deleted.
document.getElementById("new-task").value = "";
});
//Function creates a button
function createDeleteButton(id) {
let btn = document.createElement("button");
btn.className = "btn btn-primary";
btn.id = id;
btn.innerHTML = "Delete";
btn.onclick = () => {
 console.log(`Deleting row with id: item-${id}`); //Binds click properties so when it's clicked row will be deleted
 let elementToDelete = document.getElementById(`item-${id}`);
 elementToDelete.parentNode.removeChild(elementToDelete);
};
return btn;
}