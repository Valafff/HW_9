const inputElement = document.createElement('input');
inputElement.setAttribute('type','text');
inputElement.setAttribute('readonly', true);
inputElement.setAttribute('name', 'redInput');

var addData = document.querySelector("[name='addItemToOrder']")
const orderTable = document.getElementById('id_orderTable')
addData.addEventListener('click', appendOrderItemValues)
var inputs=[]

function appendOrderItemValues(){
    inputs=Array.from(document.getElementsByClassName("data"))
    let newRow=orderTable.insertRow()
    for(var element in inputs){
        newRow.insertCell(element).appendChild(inputElement.cloneNode(true)).value=inputs[element].value
    }
    let actionCell = newRow.insertCell(5);
    actionCell.innerHTML = "<input type='button' name='btndel' onclick='deleteItem(this)' value='DELETE'/>"
    actionCell.innerHTML+= "<input type='button' name='btnred' onclick='redItem(this)' value='EDIT'/>"
    newRow.cells[4].querySelector('[name="redInput"]').type='number'
    for(element in inputs){
        inputs[element].value=""
    }
}

function deleteItem(button) {
    orderTable.querySelector('thead').removeChild(button.parentNode.parentNode)
}

function saveItem(button) {
    var redtr = button.parentNode.parentNode
    for(element in inputs){
        inputs[element].setAttribute('readonly', true);
        deselectElement(inputs[element])
    }
    button.remove()
    redtr.cells[5].innerHTML+= "<input type='button' name='btnred' onclick='redItem(this)' value='SAVE'/>"
}

function redItem(button){
    var redtr = button.parentNode.parentNode
    inputs = Array.from(redtr.querySelectorAll('[name="redInput"]'))
    for(element in inputs){
        inputs[element].removeAttribute('readonly')
        highlightElement(inputs[element])
    }
    redtr.cells[5].innerHTML+="<input type='button' name='btnsave' onclick='saveItem(this)' value='SAVE'/>"
    redtr.querySelector('[name="btnred"]').remove()
}

function highlightElement(element) {
    element.style.color="blue"
}
function deselectElement(element) {
    element.style.color="black"
}
