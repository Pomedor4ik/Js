const orderForm = document.getElementById('orderForm');
const productInput = document.getElementById('productInput');
const quantityInput = document.getElementById('quantityInput');
const orderList = document.getElementById('orderList');

const orders = [];

function renderOrders() {
    orderList.innerHTML = '';
    orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Товар: ${order.product}, Кількість: ${order.quantity}`;
        orderList.appendChild(li);
    });
}

orderForm.addEventListener('submit', event => {
    event.preventDefault();
    const product = productInput.value;
    const quantity = parseInt(quantityInput.value);

    orders.push({product, quantity});

    productInput.value = '';
    quantityInput.value = '';

    renderOrders();
}); 

