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
        cartItems.innerHTML += `<p>${item.name} - RM${item.price.toFixed(2)}</p>`;
    });

    total += 4.00; // Cas COD
    cartItems.innerHTML += `<p class="font-bold">Jumlah: RM${total.toFixed(2)}</p>`;
}

function goToCheckout() {
    alert('Anda akan dibawa ke halaman checkout!');
    // Implementasi pengesahan dan borang checkout boleh dibuat di sini
}

document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        alert('Login berjaya! Anda akan dibawa ke dashboard.');
        // Redirect ke dashboard admin jika login berjaya
        window.location.href = 'admin_dashboard.html';
    } else {
        alert('Login gagal! Sila cuba lagi.');
    }
});
