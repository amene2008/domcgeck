// Item prices (replace these with actual prices for each item)
const itemPrices = {
    pepperoni: 10.99,
    // Add more items here
};

// Cart object to keep track of selected items and their quantities
const cart = {};

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    for (const itemId in cart) {
        totalPrice += cart[itemId] * itemPrices[itemId];
    }

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Function to adjust the quantity of an item
function adjustQuantity(itemId, change) {
    const inputElement = document.getElementById(itemId);
    let quantity = parseInt(inputElement.value) + change;
    if (quantity < 0) quantity = 0;
    inputElement.value = quantity;
    cart[itemId] = quantity;

    updateTotalPrice();
}

// Function to increment item quantity
function incrementItem(itemId) {
    adjustQuantity(itemId, 1);
}

// Function to decrement item quantity
function decrementItem(itemId) {
    adjustQuantity(itemId, -1);
}

// Function to delete an item from the cart
function deleteItem(itemId) {
    const inputElement = document.getElementById(itemId);
    inputElement.value = 0;
    cart[itemId] = 0;

    updateTotalPrice();
}
// Function to toggle like status for an item
function toggleLike(itemId) {
    const heartIcon = document.getElementById(itemId + 'Heart');
    heartIcon.classList.toggle('liked');
}

// Initialize the cart with default quantities (0 for all items)
document.addEventListener('DOMContentLoaded', () => {
    const itemIds = Object.keys(itemPrices);
    for (const itemId of itemIds) {
        cart[itemId] = 0;
    }
    updateTotalPrice();
});
