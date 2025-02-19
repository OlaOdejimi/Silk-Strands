// This script handles basic interactions like smooth scrolling, menu toggle, etc.
document.addEventListener('DOMContentLoaded', () => {
    // You can add any interactivity here for things like buttons or product carousels
});

const menuItems = [
    { id: 1, name: "Waffle with Berries", price: 6.50, image: "waffle.jpg" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", price: 7.00, image: "creme-brulee.jpg" },
    { id: 3, name: "Macaron Mix of Five", price: 8.00, image: "macarons.jpg" },
    { id: 4, name: "Classic Tiramisu", price: 5.50, image: "tiramisu.jpg" },
    { id: 5, name: "Pistachio Baklava", price: 4.00, image: "baklava.jpg" },
    { id: 6, name: "Lemon Meringue Pie", price: 5.00, image: "lemon-pie.jpg" },
    { id: 7, name: "Red Velvet Cake", price: 4.50, image: "red-velvet.jpg" },
    { id: 8, name: "Salted Caramel Brownie", price: 5.50, image: "brownie.jpg" },
    { id: 9, name: "Vanilla Panna Cotta", price: 6.50, image: "panna-cotta.jpg" }
];

const menuContainer = document.getElementById("menu");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total");
const clearCartButton = document.getElementById("clear-cart");

let cart = [];

// Render menu items
menuItems.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("card");
    itemElement.innerHTML = `
        <img src="images/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(itemElement);
});

// Add item to cart
function addToCart(id) {
    const selectedItem = menuItems.find(item => item.id === id);
    cart.push(selectedItem);
    updateCart();
}

// Update cart display
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Clear cart
clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCart();
});
