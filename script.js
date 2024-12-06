let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<div class="flex justify-between p-2 border-b">${item.name} - RM${item.price.toFixed(2)}</div>`;
    });

    total += 4.00; // Cas COD
    cartItems.innerHTML += `<div class="font-bold mt-2">Jumlah: RM${total.toFixed(2)}</div>`;
}

function goToCheckout() {
    alert('Anda akan dibawa ke halaman checkout!');
    // Implementasi pengesahan dan borang checkout boleh dibuat di sini
}
