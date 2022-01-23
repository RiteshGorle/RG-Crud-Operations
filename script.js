//Fetch API data   
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then (data => console.log(data))


//Data collection on button add new user
	var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//re-gain data
function readFormData(){
    var formData = {};
    formData["mail"] = document.getElementById("mail").value;
    formData["title"] = document.getElementById("title").value;
    formData["img"] = document.getElementById("img").value;
    
    return formData;
}

//fill the data inforamtion
function insertNewRecord(data){
    var table = document.getElementById("userrow").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.mail;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.title;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.img;
    
    
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button  class="btn btn-info" >View</button>
                           <button class="btn btn-primary" onClick='onEdit(this)' data-toggle="modal" data-target="#myModal">Edit</button> 
                        <button class="btn btn-danger" onClick='onDelete(this)'>Delete</button>`
}

//Submit alert on sumit button
function myFunction() {
  alert("Data has been Saved Successfully");
}

//Reset the form
function resetForm(){
    document.getElementById('mail').value = '';
    document.getElementById('title').value = '';
    document.getElementById('img').value = '';
    
}

//Edit or update button
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('mail').value = selectedRow.cells[0].innerHTML;
    document.getElementById('title').value = selectedRow.cells[1].innerHTML;
    document.getElementById('img').value = selectedRow.cells[2].innerHTML;
    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
   
}

//Delete button
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('userrow').deleteRow(row.rowIndex);
    }
    resetForm();
}