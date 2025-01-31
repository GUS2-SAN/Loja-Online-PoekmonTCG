let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Atualiza o contador do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Adiciona produto ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productId = productCard.dataset.id;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('R$ ', '').replace(',', '.'));
        const productImage = productCard.querySelector('img').src;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Produto adicionado ao carrinho!');
    });
});

// Renderiza os itens do carrinho
function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>R$ ${item.price.toFixed(2)}</p>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="remove-item" data-id="${item.id}">Remover</button>
                </div>
            </div>
        `;
    });

    totalPrice.textContent = total.toFixed(2);
}

// Atualiza a quantidade de um item no carrinho
document.addEventListener('change', e => {
    if (e.target.matches('input[type="number"]')) {
        const productId = e.target.dataset.id;
        const item = cart.find(item => item.id === productId);
        item.quantity = parseInt(e.target.value);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }
});

// Remove um item do carrinho
document.addEventListener('click', e => {
    if (e.target.matches('.remove-item')) {
        const productId = e.target.dataset.id;
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    }
});

// Inicializa o carrinho
updateCartCount();
renderCartItems();

function renderOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    if (!orderItems) return;

    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        orderItems.innerHTML += `
            <div>
                <span>${item.name} (${item.quantity}x)</span>
                <span>R$ ${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    orderTotal.textContent = total.toFixed(2);
}

// Renderiza o resumo do pedido ao carregar a página
renderOrderSummary();

// Finaliza a compra
document.getElementById('checkout-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});