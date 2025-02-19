document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItemsContainer = document.getElementById("cart-items");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productName = product.getAttribute("data-name");
            const productPrice = parseInt(product.getAttribute("data-price"));

            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        let existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>₦${item.price * item.quantity}</span>
                <button class="remove-item" data-name="${item.name}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartCount.textContent = itemCount;
        cartTotal.textContent = total.toLocaleString();

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                removeFromCart(this.getAttribute("data-name"));
            });
        });
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCart();
    }

    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        let orderSummary = cart.map(item => `${item.name} (x${item.quantity}) - ₦${item.price * item.quantity}`).join("\n");
        alert(`Order Confirmed!\n\n${orderSummary}\n\nTotal: ₦${cartTotal.textContent}`);
        cart = [];
        updateCart();
    });
});


