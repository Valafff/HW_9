const newItemCategory = document.querySelector("[name = 'newItemCategory']");
const newItemType = document.querySelector("[name = 'newItemType']");
const newItemManuf = document.querySelector("[name = 'newItemManuf']");
const newItemModel = document.querySelector("[name = 'newItemModel']");
const newItemQty = document.querySelector("[name = 'newItemQty']");
const buttonItemToOrder = document.querySelector("[name = 'addItemToOrder']");
var editMode = false;

// console.dir(newItemCategory);

const orderTable = document.getElementById("id_orderTable");

function prepareValues() {
    let values = {};
    values.category = newItemCategory.value;
    values.type = newItemType.value;
    values.newItemManuf = newItemManuf.value;
    values.newItemModel = newItemModel.value;
    values.newItemQty = newItemQty.value;
    return values;
}

function appendOrderItemValues(row, values) {
    let categoryCell = row.insertCell(0);
    categoryCell.innerHTML = values.category;

    let typeCell = row.insertCell(1);
    typeCell.innerHTML = values.type;

    let manCell = row.insertCell(2);
    manCell.innerHTML = values.newItemManuf;

    let modelCell = row.insertCell(3);
    modelCell.innerHTML = values.newItemModel;

    let qtylCell = row.insertCell(4);
    qtylCell.innerHTML = values.newItemQty;

    let actionCell = row.insertCell(5);
    actionCell.innerHTML = "<input type ='button' name='btnDeleteItem' onclick = 'deleteItem(this)' value = 'DELETE' />";
    actionCell.innerHTML += "<input type ='button' name='btnEditItem' onclick = 'editItem(this)' value = 'EDIT' />";
}

function addItemToOrder() {
    let values = prepareValues();
    // console.dir(values);
    // console.dir(orderTable);
    let newRow = orderTable.insertRow();
    appendOrderItemValues(newRow, values);

    // console.dir(newRow);
    //Очистка
    newItemCategory.value = "";
    newItemType.value = "";
    newItemManuf.value = "";
    newItemModel.value = "";
    newItemQty.value = "";
}

buttonItemToOrder.addEventListener("click", addItemToOrder);

function deleteItem(button) {
    // console.dir(button);
    // //Вариант 1
    // orderTable.querySelector('thead').removeChild(button.parentNode.parentNode);
    //Вариант 2
    const rowParent = button.parentNode.parentNode.parentNode;
    rowParent.removeChild(button.parentNode.parentNode);
    // var line = event.target.closest('tr');
    // var f = document.forms[0];
    // f.removeChild(line);

}

function editItem(button) {
    if (!editMode) {
        button.parentNode.innerHTML += "<input type ='button' name='btnSaveItem' onclick = 'saveItem(this)' value = 'SAVE' />";
        editMode = true;
    }
}


        // function editOrder(button) {
        //     const row = button.parentNode.parentNode;
        //     editIndex = row.rowIndex - 1;

        //     document.getElementById('category').value = row.cells[0].innerText;
        //     document.getElementById('type').value = row.cells[1].innerText;
        //     document.getElementById('manufacturer').value = row.cells[2].innerText;
        //     document.getElementById('model').value = row.cells[3].innerText;
        //     document.getElementById('quantity').value = row.cells[4].innerText;

        //     const addButton = document.querySelector('button[onclick="addOrder()"]');
        //     addButton.innerText = 'Сохранить';
        //     addButton.onclick = saveOrder;
        // }




// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <title>Заказы</title>
//     <style>
//         table, th, td {
//             border: 1px solid black;
//             border-collapse: collapse;
//             padding: 8px;
//         }
//         th, td {
//             text-align: left;
//         }
//     </style>
// </head>
// <body>
//     <h2>Добавить заказ</h2>
//     <form id="orderForm">
//         <label>Категория: <input type="text" id="category"></label><br>
//         <label>Тип: <input type="text" id="type"></label><br>
//         <label>Производитель: <input type="text" id="manufacturer"></label><br>
//         <label>Модель: <input type="text" id="model"></label><br>
//         <label>Количество: <input type="number" id="quantity"></label><br>
//         <button type="button" onclick="addOrder()">Добавить заказ</button>
//     </form>

//     <h2>Список заказов</h2>
//     <table id="ordersTable">
//         <thead>
//             <tr>
//                 <th>Категория</th>
//                 <th>Тип</th>
//                 <th>Производитель</th>
//                 <th>Модель</th>
//                 <th>Количество</th>
//                 <th>Действия</th>
//             </tr>
//         </thead>
//         <tbody>
//         </tbody>
//     </table>

//     <script>
//         let editIndex = -1;

//         function addOrder() {
//             const category = document.getElementById('category').value;
//             const type = document.getElementById('type').value;
//             const manufacturer = document.getElementById('manufacturer').value;
//             const model = document.getElementById('model').value;
//             const quantity = document.getElementById('quantity').value;

//             if (editIndex === -1) {
//                 const table = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
//                 const newRow = table.insertRow();

//                 newRow.insertCell(0).innerText = category;
//                 newRow.insertCell(1).innerText = type;
//                 newRow.insertCell(2).innerText = manufacturer;
//                 newRow.insertCell(3).innerText = model;
//                 newRow.insertCell(4).innerText = quantity;
//                 const actionsCell = newRow.insertCell(5);
//                 actionsCell.innerHTML = `<button onclick="editOrder(this)">Редактировать</button> <button onclick="deleteOrder(this)">Удалить</button>`;
//             } else {
//                 const table = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
//                 const row = table.rows[editIndex];

//                 row.cells[0].innerText = category;
//                 row.cells[1].innerText = type;
//                 row.cells[2].innerText = manufacturer;
//                 row.cells[3].innerText = model;
//                 row.cells[4].innerText = quantity;
//                 row.cells[5].innerHTML = `<button onclick="editOrder(this)">Редактировать</button> <button onclick="deleteOrder(this)">Удалить</button>`;
//                 editIndex = -1;
//             }

//             document.getElementById('orderForm').reset();
//         }

//         function deleteOrder(button) {
//             const row = button.parentNode.parentNode;
//             row.parentNode.removeChild(row);
//         }

//         function editOrder(button) {
//             const row = button.parentNode.parentNode;
//             editIndex = row.rowIndex - 1;

//             document.getElementById('category').value = row.cells[0].innerText;
//             document.getElementById('type').value = row.cells[1].innerText;
//             document.getElementById('manufacturer').value = row.cells[2].innerText;
//             document.getElementById('model').value = row.cells[3].innerText;
//             document.getElementById('quantity').value = row.cells[4].innerText;

//             const addButton = document.querySelector('button[onclick="addOrder()"]');
//             addButton.innerText = 'Сохранить';
//             addButton.onclick = saveOrder;
//         }

//         function saveOrder() {
//             addOrder();
//             const addButton = document.querySelector('button[onclick="saveOrder()"]');
//             addButton.innerText = 'Добавить заказ';
//             addButton.onclick = addOrder;
//         }
//     </script>
// </body>
// </html>