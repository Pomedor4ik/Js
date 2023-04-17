function changeTheme() {
  var textElement = document.getElementById("myText");
  if (textElement.style.color === "yellow") {
    textElement.style.color = "blue";
    textElement.style.backgroundColor = "yellow";
  } else {
    textElement.style.color = "yellow";
    textElement.style.backgroundColor = "blue";
  }
}


// =======================================================================


// let btnChenger = document.querySelector('#btnChenger');
// let inputColors = document.querySelector('#inputColors');
// let block = document.querySelector('.block');

// inputColors.addEventListener("input", () => {
//   block.style.background = inputColors.value
// })


// =======================================================================


// const orderForm = document.getElementById('orderForm');
// const productInput = document.getElementById('productInput');
// const quantityInput = document.getElementById('quantityInput');
// const orderList = document.getElementById('orderList');

// orderList.style.border = "2px solid red";
// orderList.style.width = "200px"
// const orders = [];

// function renderOrders() {
//     orderList.innerHTML = '';
//     orders.forEach(order => {
//         const li = document.createElement('li');
//         li.textContent = `Товар: ${order.product}, Кількість: ${order.quantity}`;
//         orderList.appendChild(li);
//     });
// }

// orderForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const product = productInput.value;
//     const quantity = parseInt(quantityInput.value);

//     orders.push({product, quantity});

//     productInput.value = '';
//     quantityInput.value = '';

//     renderOrders();
// });