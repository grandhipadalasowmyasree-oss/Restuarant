let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart");
}

function displayCart() {
  let list = document.getElementById("cartItems");
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total:" + total;
}

function placeOrder(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;

  let order = { name, address, phone, items: cart };
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Order Placed Successfully!");
}

function displayOrders() {
  let history = document.getElementById("orderHistory");
  orders.forEach(order => {
    let li = document.createElement("li");
    li.textContent = order.name + " - " + order.phone;
    history.appendChild(li);
  });
}

if (document.getElementById("cartItems")) displayCart();
if (document.getElementById("orderHistory")) displayOrders();
function placeOrder(event) {
  event.preventDefault(); // stop page refresh

  // show thank you message
  document.getElementById("thankYouMessage").style.display = "block";

  // (optional) clear form after order
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
}
document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = ""; // refresh cart every load

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = total;
}
document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = ""; // refresh cart

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}
document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = ""; // refresh cart

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}


